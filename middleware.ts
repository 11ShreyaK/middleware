import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || 'GLOBAL';
  const url = request.nextUrl.clone();

  if (url.pathname === '/') {
    if (country === 'IN') {
      url.pathname = '/in';
    } else if (country === 'US') {
      url.pathname = '/us';
    } else {
      url.pathname = '/global';
    }

    
    url.searchParams.set('country', country);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

 
