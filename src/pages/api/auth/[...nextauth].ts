//import { PrismaAdapter } from '@next-auth/prisma-adapter'
//import { PrismaClient } from '@prisma/client'
import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

type ClientType = {
  clientId: string
  clientSecret: string
}
console.log(`NextAuth ${process.env.NEXTAUTH_URL}`)
//const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
  //adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      site: process.env.NEXTAUTH_URL,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
