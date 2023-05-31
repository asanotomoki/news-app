import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

import { PrimaryButton } from '@/components/share/atom/Button'

export const Header = () => {
  const { data: session } = useSession()
  return (
    <header className="flex justify-between w-full p-4 bg-gray-700">
      <Link href="/">
        <div className="flex gap-4">
          <h1 className="text-2xl font-bold text-primary">News App</h1>
        </div>
      </Link>
      <div className="flex gap-4 ">
        {session ? (
          <PrimaryButton onClick={() => signOut()}>ログアウト</PrimaryButton>
        ) : (
          <PrimaryButton onClick={() => signIn()}>ログイン</PrimaryButton>
        )}
      </div>
    </header>
  )
}
