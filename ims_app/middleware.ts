import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextRequest, NextResponse } from "next/server";
import { USER_ROLES } from './app/api/enums/roles';

export default authMiddleware({
    afterAuth(auth, req, evt) {
        const toKen = auth.getToken();

        // Handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        // Check user roles
        if (auth.userId) {
            const userRole = ;// Obtén el rol del usuario desde tu base de datos o donde lo almacenes;

          // Redirigir a la página correspondiente según el rol
          if (userRole === USER_ROLES.ADMIN && req.nextUrl.pathname.startsWith('/user')) {
                const adminHome = new URL('/admin-home', req.url);
                return NextResponse.redirect(adminHome);
            } else if (userRole === USER_ROLES.USER && req.nextUrl.pathname.startsWith('/admin')) {
                const userHome = new URL('/user-home', req.url);
                return NextResponse.redirect(userHome);
            }
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