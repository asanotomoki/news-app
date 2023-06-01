import type { News } from '@/types/News'

type NewsList = {
  articles: News[]
}

export const getTopNewsList = async (): Promise<NewsList | undefined> => {
  const url = `${process.env.NEWS_API_URL}/top-headlines?country=jp&pageSize=${process.env.PAGE_SIZE}&apiKey=${process.env.NEWS_API_KEY}`
  const response = await fetch(url)
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.error(err)
      return undefined
    })
  if (response) {
    const response_json = await response.json()
    return response_json
  }
  return undefined
}

export const getCategoryNewsList = async (
  category: string
): Promise<NewsList | undefined> => {
  const url = `${process.env.NEWS_API_URL}/top-headlines?country=jp&category=${category}&pageSize=${process.env.PAGE_SIZE}&apiKey=${process.env.NEWS_API_KEY}`
  const response = await fetch(url)
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.error(err)
      return undefined
    })
  if (response) {
    const response_json = await response.json()
    return response_json
  }
  return undefined
}
