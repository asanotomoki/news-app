import React from 'react'

import { Header } from '../Header'
import { SideBar } from '../sidebar'

type Props = {
  children: React.ReactNode
}
export const PrimaryTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={`flex justify-between w-full gap-4`}>
        <SideBar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </div>
      </main>
    </>
  )
}
