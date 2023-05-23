import Link from 'next/link'
import { useRouter } from 'next/router'

import { NewsCard } from '@/components/newsCard'
import { getCategoryNewsList } from '@/lib/api/getNewsList'
import type { News } from '@/types/News'

export default function Home(props: { topArticles: News[]; category: string }) {
  const newsArray = props.topArticles
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1 className="text-4xl font-bold mb-16">{props.category}</h1>
      <section>
        <ul className="flex flex-col gap-6">
          {newsArray.length !== 0 ? (
            newsArray.map((news, index) => {
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
            })
          ) : (
            <>
              <h2>記事がありません</h2>
              <Link href="/">Homeへ</Link>
            </>
          )}
        </ul>
      </section>
    </main>
  )
}

export const getStaticProps = async (paths: {
  params: { category: string }
}) => {
  const path = paths.params.category
  const topRes = await getCategoryNewsList(path)
  const topArticles = topRes.articles
  const category = path.toUpperCase()
  return {
    props: {
      topArticles,
      category,
    },
    revalidate: 60 * 60,
  }
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { category: 'technology' } },
    { params: { category: 'science' } },
    { params: { category: 'health' } },
  ]
  return { paths, fallback: 'blocking' }
}
