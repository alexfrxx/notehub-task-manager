import { NextRequest, NextResponse } from 'next/server';
import { parseSetCookie } from 'cookie';
import { checkServerSession } from './lib/api/serverApi';

const privateRoutes = ['/profile', '/notes'];
const publicRoutes = ['/sign-in', '/sign-up'];

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Access token exists
  if (accessToken) {
    if (isPublicRoute) {
      return NextResponse.redirect(new URL('/notes/filter/all', request.url));
    }

    return NextResponse.next();
  }

  // Refresh session
  if (refreshToken) {
    try {
      const data = await checkServerSession();

      const response = isPublicRoute
        ? NextResponse.redirect(new URL('/notes/filter/all', request.url))
        : NextResponse.next();

      const setCookie = data.headers['set-cookie'];

      if (setCookie) {
        const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

        for (const cookieStr of cookieArray) {
          const parsed = parseSetCookie(cookieStr);

          if (parsed.value) {
            response.cookies.set(parsed.name, parsed.value, parsed);
          }
        }
      }

      return response;
    } catch {
      // Invalid refresh token
    }
  }

  // No valid session
  if (isPrivateRoute) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/sign-in', '/sign-up', '/notes/:path*']
};
