import { SignJWT, jwtVerify } from 'jose'

function getSecret() {
  return new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET ?? 'fallback-dev-secret-change-in-production'
  )
}

export async function signAdminToken(): Promise<string> {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret())
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload
  } catch {
    return null
  }
}
