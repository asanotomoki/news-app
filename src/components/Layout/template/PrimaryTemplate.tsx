import React from 'react'

import { SideBar } from '../sidebar/sideBar'

type Props = {
  children: React.ReactNode
}
export const PrimaryTemplate = ({ children }: Props) => {
  return (
    <>
      <main className={`flex justify-between w-full gap-4`}>
        <SideBar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </div>
      </main>
    </>
  )
}
