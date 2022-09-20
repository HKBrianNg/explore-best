import { useState } from 'react'
import { Box, Chip, Button } from '@mui/material'
import { defaultNewsCategories } from '../../../constant'
import Message from '../../../components/message/Message'
import { useAppContext } from '../../../context/AppContext'
import { useNewsContext } from '../../../context/NewsContext'


function NewsCategories() {
  const [selectedChip, setSelectedChip] = useState('')
  const { isLoading, setIsLoading, setSysMessage } = useAppContext()
  const { setNews, getNewsAPI } = useNewsContext()


  const handleClick = (name) => {
    setSelectedChip(name)
  }

  const handleGetNews = async () => {
    setIsLoading(true)
    setSysMessage("loading...")
    const data = await getNewsAPI(selectedChip)
    setNews(data.value)
    setIsLoading(false)
    setSysMessage(null)
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
        {defaultNewsCategories.map((item) => (
          <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
            label={item.name} onClick={() => handleClick(item.name)} />
        ))}
      </Box>
      <Box mt={1}>
        <Button variant='contained' disabled={isLoading} onClick={handleGetNews}>Get News</Button>
        <Message />
      </Box>
    </>
  )
}

export default NewsCategories