import Link from 'next/link'

import { NewsCard } from '@/components/newsCard'

export default function Home(props: any) {
  console.log(props.topArticles[0].url)
  const newsArray = props.topArticles
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <section>
        <ul className="flex flex-col gap-6">
          {newsArray.map((news: any, index: number) => {
            return (
              <li key={`news-${index}`}>
                <Link href={news.url}>
                  <NewsCard
                    title={news.title}
                    date={news.publishedAt}
                    image={news.urlToImage}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export const getStaticProps = async () => {
  // NewsAPIのトップ記事の情報を取得
  const pageSize = 10 // 取得したい記事の数
  const requestUrl = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`

  console.log(requestUrl)
  const topRes = await fetch(requestUrl)
  const topJson = await topRes.json()
  console.log(topJson)
  const topArticles = topJson?.articles
  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  }
}
