import { PrimaryTemplate } from '@/components/Layout/template/PrimaryTemplate'
import { NewsCard } from '@/components/newsCard'
import { getTopNewsList } from '@/lib/api/getNewsList'
import type { News } from '@/types/News'

export default function Home(props: { topArticles: News[] }) {
  const newsArray = props.topArticles

  return (
    <PrimaryTemplate>
      <h1 className="text-4xl font-bold mb-16">Home</h1>
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

export const getStaticProps = async () => {
  const topRes = await getTopNewsList()
  const topArticles = topRes.articles
  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 60,
  }
}
