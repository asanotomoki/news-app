import type { News } from '@/types/News'

type NewsList = {
  articles: News[]
}

export const getTopNewsList = async (): Promise<NewsList> => {
  const url = `${process.env.NEWS_API_URL}/top-headlines?country=jp&pageSize=${process.env.PAGE_SIZE}&apiKey=${process.env.NEWS_API_KEY}`
  console.log(`NEWS_API_URL : ${process.env.NEWS_API_URL}`)
  console.log(`GOOGLE_CLIENT_SECRET : ${process.env.GOOGLE_CLIENT_SECRET}`)
  const response = await fetch(url)
  const response_json = await response.json()
  return response_json
}

export const getCategoryNewsList = async (
  category: string
): Promise<NewsList> => {
  const url = `${process.env.NEWS_API_URL}/top-headlines?country=jp&category=${category}&pageSize=${process.env.PAGE_SIZE}&apiKey=${process.env.NEWS_API_KEY}`
  const response = await fetch(url)
  const response_json = await response.json()
  return response_json
}
