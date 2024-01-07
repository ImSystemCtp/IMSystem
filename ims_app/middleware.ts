import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextRequest, NextResponse } from "next/server";

export default authMiddleware({
    async afterAuth(auth, req, evt) {
        // Handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
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