import { useSession } from 'next-auth/react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'

import { categories } from '@/data/category'

import { LinkToIcon } from './LinkToIcon'

export const Navigate = () => {
  const { data: session } = useSession()
  return (
    <ul className="space-y-2 font-medium">
      <LinkToIcon icon={<AiOutlineHome />} slug={'/'} />
      {categories.map((category) => {
        return (
          <LinkToIcon
            key={`side-navigation-${category.slug}`}
            icon={category.icon}
            slug={`/category/${category.slug}`}
          />
        )
      })}
      {session && <LinkToIcon icon={<MdFavoriteBorder />} slug={'/favorite'} />}
    </ul>
  )
}
