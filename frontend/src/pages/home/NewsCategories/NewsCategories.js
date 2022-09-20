import { useState, useEffect } from 'react'
import { Box, Chip, } from '@mui/material'
import { defaultNewsCategories } from '../../../constant'
import Message from '../../../components/message/Message'
import { useAppContext } from '../../../context/AppContext'
import { useNewsContext } from '../../../context/NewsContext'


function NewsCategories() {
  const [selectedChip, setSelectedChip] = useState('世界')
  const { isLoading, setIsLoading, setSysMessage } = useAppContext()
  const { setNews, getNewsAPI } = useNewsContext()


  const handleClick = (name) => {
    setSelectedChip(name)
    getNews(name)
  }

  const getNews = async (name) => {
    setIsLoading(true)
    setSysMessage("loading...")
    const data = await getNewsAPI(name)
    setNews(data.value)
    setIsLoading(false)
    setSysMessage(null)
  }

  useEffect(() => {
    getNews(selectedChip)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Box disabled={isLoading} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
        {defaultNewsCategories.map((item) => (
          <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
            label={item.name} onClick={() => handleClick(item.name)} />
        ))}
      </Box>
      <Box mt={1}>
        <Message />
      </Box>
    </>
  )
}

export default NewsCategories