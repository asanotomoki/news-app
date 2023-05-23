import Link from 'next/link'
import React from 'react'

import { PrimaryButton } from '../share/atom/Button'

type Props = {
  title: string
  date: string
  image: string
  url: string
}

export const NewsCard: React.FC<Props> = (props) => {
  const { title, date, image, url } = props
  const onClick = () => {
    console.log('click')
  }
  return (
    <article className="flex justify-between items-center w-full  bg-white p-6 min-h-max">
      <div className="flex flex-col justify-between gap-3 w-2/3">
        <Link href={url}>
          <h3 className="text-2xl font-bold text-gray-950 hover:underline hover:text-gray-700">
            {title}
          </h3>
        </Link>
        <p className=" text-gray-500">{date}</p>
        <div>
          <PrimaryButton onClick={onClick}>保存</PrimaryButton>
        </div>
      </div>
      <div className="w-1/3 ml-8 max-h-48 overflow-hidden flex items-center">
        <img src={image} alt={title} />
      </div>
    </article>
  )
}
