import type { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'

import { PrimaryTemplate } from '@/components/Layout/template/PrimaryTemplate'
import { NewsCard } from '@/components/newsCard'
import { getTopNewsList } from '@/lib/api/getNewsList'
import type { News } from '@/types/News'

import { authOptions } from './api/auth/[...nextauth]'

export default function Favorite(props: { content: News[] }) {
  const newsArray = props.content

  return (
    <PrimaryTemplate>
      <h1 className="text-4xl font-bold mb-16">Favorite</h1>
      <section>
        <ul className="flex flex-col gap-6">
          {newsArray.map((news, index) => {
            return (
              <li key={`news-${index}`}>
                <NewsCard
                  title={news.title}
                  date={news.publishedAt}
                  image={news.urlToImage}
                  url={news.url}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </PrimaryTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  } else {
    const topRes = await getTopNewsList()
    const topArticles = topRes?.articles
    return {
      props: {
        title: 'Favorite',
        content: topArticles,
      },
    }
  }
}
