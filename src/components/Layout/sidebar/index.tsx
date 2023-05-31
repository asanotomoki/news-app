import React from 'react'

import { Navigate } from './navigate'

export const SideBar = () => {
  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 flex items-center fixed"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4  bg-gray-700 shadow-xl w-full">
          <Navigate />
        </div>
      </aside>
    </>
  )
}
