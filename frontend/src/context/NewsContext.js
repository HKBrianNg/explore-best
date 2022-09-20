import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import axios from 'axios'

const newsContext = createContext()

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([])

  const getNewsAPI = async (filterText) => {
    const URL = 'https://bing-news-search1.p.rapidapi.com/news/search'
    try {
      const { data } = await axios.get(URL, {
        params: {
          q: filterText,
          count: '100',
          freshness: 'Week',
          textFormat: 'Raw',
          safeSearch: 'Off'
        },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      })
      setNews(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <newsContext.Provider value={{
      news, setNews,
      getNewsAPI
    }}>
      {children}
    </newsContext.Provider>
  )
}

export const useNewsContext = () => {
  return useContext(newsContext)
} 