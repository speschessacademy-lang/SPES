import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function isAuthorized(req: NextRequest): boolean {
  const requiredUser = process.env.ADMIN_USER;
  const requiredPass = process.env.ADMIN_PASS;

  if (!requiredUser || !requiredPass) {
    // If not configured, do not block (avoids breaking builds). Set envs to enable gating.
    return true;
  }

  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;

  const [scheme, encoded] = authHeader.split(' ');
  if (scheme !== 'Basic' || !encoded) return false;

  try {
    const decoded = atob(encoded);
    const [user, pass] = decoded.split(':');
    return user === requiredUser && pass === requiredPass;
  } catch {
    return false;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/admin')) {
    if (isAuthorized(req)) {
      return NextResponse.next();
    }
    return new NextResponse('Authentication required.', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="SPES Admin"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};


