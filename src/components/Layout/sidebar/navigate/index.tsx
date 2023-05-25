import { AiOutlineHome } from 'react-icons/ai'

import { categories } from '@/data/category'

import { LinkToIcon } from './LinkToIcon'

export const Navigate = () => {
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
    </ul>
  )
}
