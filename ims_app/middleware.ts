import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { USER_ROLES } from './app/api/enums/roles';
import axios from 'axios';
import { ims_users } from '@prisma/client';

export default authMiddleware({
    async afterAuth(auth, req, evt) {
        console.log("req" + req.nextUrl)
        // Handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }
        const route = process.env.HOST + '/api/auth';
        console.log("      RUTAAAAAAAA     " + route)
        try {
            const response = await fetch(route);
            // Log the response for debugging purposes
            console.log(response)
            console.log("Response Status:", response.status);
            // Check if the response is successful (status 2xx)
            if (response.ok) {
                const user = await response.json() as ims_users;
                console.log("User Data:", user);
                // Check user roles
                if (auth.userId) {
                    // Redirigir a la página correspondiente según el rol
                    if (user.usu_role === USER_ROLES.ADMIN && req.nextUrl.pathname.includes('/user')) {
                        const adminHome = new URL('/admin', req.url);
                        return NextResponse.redirect(adminHome);
                    } else if (user.usu_role === USER_ROLES.USER && req.nextUrl.pathname.includes('/admin')) {
                        const userHome = new URL('/user', req.url);
                        return NextResponse.redirect(userHome);
                    }
                }
            } else {
                // Log an error if the response is not successful
                console.error("Error fetching user data. Status:", response.status);

                // Handle the error appropriately
                // For example, redirect to an error page
            }
        } catch (error) {
            // Log any other unexpected errors
            console.error("Unexpected error:", error);
        }
        if (auth.userId && !auth.isPublicRoute) {
            return NextResponse.next();
        }
        // Permite que los usuarios visiten rutas públicas.
        return NextResponse.next();
    }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};