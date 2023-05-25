import Link from 'next/link'
import { useRouter } from 'next/router'

import { PrimaryTemplate } from '@/components/Layout/template/PrimaryTemplate'
import { NewsCard } from '@/components/newsCard'
import { categories } from '@/data/category'
import { getCategoryNewsList } from '@/lib/api/getNewsList'
import type { News } from '@/types/News'

export default function Home(props: {
  topArticles: News[]
  category: string
  title: string
}) {
  const newsArray = props.topArticles
  return (
    <PrimaryTemplate>
      <h1 className="text-4xl font-bold mb-16">{props.title}</h1>
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
    </PrimaryTemplate>
  )
}

export const getStaticProps = async (paths: {
  params: { category: string }
}) => {
  const path = paths.params.category
  const topRes = await getCategoryNewsList(path)
  const topArticles = topRes.articles
  const category = path.toUpperCase()
  const title = categories.find((category) => category.slug === path)?.label
  return {
    props: {
      topArticles,
      category,
      title,
    },
    revalidate: 60 * 60,
  }
}

export const getStaticPaths = async () => {
  const paths = categories.map((category) => {
    return { params: { category: category.slug } }
  })
  return { paths, fallback: 'blocking' }
}
