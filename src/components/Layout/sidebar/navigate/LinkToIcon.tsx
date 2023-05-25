import Link from 'next/link'
import React from 'react'

type Props = {
  icon: React.ReactNode
  slug: string
}

export const LinkToIcon: React.FC<Props> = (props) => {
  const { icon, slug } = props
  return (
    <li>
      <Link
        href={slug}
        className="text-3xl flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:text-primary"
      >
        {icon}
      </Link>
    </li>
  )
}
