import { NextRequest, NextResponse } from 'next/server'

type Environment = 'production' | 'development' | 'other'
export function middleware(req: NextRequest) {
  const headers = new Headers(req.headers)
  const currentEnv = process.env.NODE_ENV as Environment
  const isHttps = headers.get('x-forwarded-proto')?.split(',')[0] === 'https'
  const isLocalhost = req.headers.get('host')?.includes('localhost')
  if (currentEnv === 'production' && isHttps && !isLocalhost) {
    const newUrl = new URL(`http://${ headers.get('host') }` || '')
    newUrl.protocol = 'https:'
    return NextResponse.redirect(newUrl.href, 301)
  }
  return NextResponse.next()
}
