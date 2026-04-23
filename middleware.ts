import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const KILLSWITCH_ENABLED = false;
const KILLSWITCH_MESSAGE = "Site maintenance in progress";

export async function middleware(request: NextRequest) {
  if (KILLSWITCH_ENABLED) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head><title>Unavailable</title><meta name="viewport" content="width=device-width, initial-scale=1"></head>
        <body style="margin:0;background:#000;color:#ff0000;font-family:inter;display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;">
          <div><h1>${KILLSWITCH_MESSAGE}</h1><p>Please check back later.</p></div>
        </body>
      </html>`,
      { status: 503, headers: { 'Content-Type': 'text/html' } }
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
