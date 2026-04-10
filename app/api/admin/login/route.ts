import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { signAdminToken } from '@/lib/auth'

const loginMap = new Map<string, { count: number; reset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = loginMap.get(ip)
  if (!entry || entry.reset < now) {
    loginMap.set(ip, { count: 1, reset: now + 60_000 })
    return false
  }
  if (entry.count >= 5) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many attempts. Try again in a minute.' }, { status: 429 })
  }

  let password: string | undefined
  try {
    const body = await req.json()
    password = body.password
  } catch {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  if (!password) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const hash = process.env.ADMIN_PASSWORD_HASH
  console.log('[login] hash from env:', hash)
  console.log('[login] hash length:', hash?.length)
  console.log('[login] password length:', password.length)
  if (!hash) {
    console.error('ADMIN_PASSWORD_HASH env var not set')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const valid = await bcrypt.compare(password, hash)
  console.log('[login] bcrypt.compare result:', valid)
  if (!valid) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = await signAdminToken()

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return res
}
