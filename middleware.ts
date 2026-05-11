import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas protegidas que requerem autenticação
  const protectedRoutes = ['/dashboard', '/perfil', '/configuracoes']
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

  // Rotas de autenticação (não devem ser acessadas por usuários logados)
  const authRoutes = ['/login', '/register', '/recover']
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  // Verificar token de autenticação (simulação)
  const authToken = request.cookies.get('auth-storage')?.value
  const isAuthenticated = !!authToken

  // Redirecionar usuários não autenticados das rotas protegidas
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Redirecionar usuários autenticados das rotas de auth
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/perfil/:path*',
    '/configuracoes/:path*',
    '/login',
    '/register',
    '/recover',
  ],
}
