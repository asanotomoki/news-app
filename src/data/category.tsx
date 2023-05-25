import { FaChartBar } from 'react-icons/fa'
import { IoBusinessSharp } from 'react-icons/io5'
import { MdOutlineScience, MdSportsBaseball } from 'react-icons/md'
import { RiHealthBookLine } from 'react-icons/ri'
import { SiDcentertainment, SiGeneralelectric } from 'react-icons/si'

export type Category = {
  readonly label: string
  readonly slug: string
  readonly icon: React.ReactNode
}

export const categories: Array<Category> = [
  {
    label: 'Business',
    slug: 'business',
    icon: <IoBusinessSharp />,
  },
  {
    label: 'Entertainment',
    slug: 'entertainment',
    icon: <SiDcentertainment />,
  },
  {
    label: 'General',
    slug: 'general',
    icon: <SiGeneralelectric />,
  },
  {
    label: 'Health',
    slug: 'health',
    icon: <RiHealthBookLine />,
  },
  {
    label: 'Science',
    slug: 'science',
    icon: <MdOutlineScience />,
  },
  {
    label: 'Sports',
    slug: 'sports',
    icon: <MdSportsBaseball />,
  },
  {
    label: 'Technology',
    slug: 'technology',
    icon: <FaChartBar />,
  },
]
