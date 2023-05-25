//business entertainment general health science sports technology
import { GrTechnology } from 'react-icons/gr'
import { RiMentalHealthFill } from 'react-icons/ri'

export const categories = [
  {
    label: 'ビジネス',
    slug: 'business',
    icon: <GrTechnology />,
  },
  {
    label: 'エンタメ',
    slug: 'entertainment',
    icon: <GrTechnology />,
  },
  {
    label: '一般',
    slug: 'general',
    icon: <GrTechnology />,
  },
  {
    label: '健康',
    slug: 'health',
    icon: <RiMentalHealthFill />,
  },
  {
    label: '科学',
    slug: 'science',
    icon: <GrTechnology />,
  },
  {
    label: 'スポーツ',
    slug: 'sports',
    icon: <GrTechnology />,
  },
  {
    label: 'テクノロジー',
    slug: 'technology',
    icon: <GrTechnology />,
  },
] as const
