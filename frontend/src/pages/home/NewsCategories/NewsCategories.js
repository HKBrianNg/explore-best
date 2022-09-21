import { useState, useEffect } from 'react'
import { Box, Chip, Stack, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { defaultWorldCategories, defaultAsiaCategories, defaultEuropeCategories, defaultAmericaCategories, defaultAtlanticCategories } from '../../../constant'
import { defaultExploreCategories, defaultSportCategories } from '../../../constant'
import Message from '../../../components/message/Message'
import { useAppContext } from '../../../context/AppContext'
import { useNewsContext } from '../../../context/NewsContext'
import WorldImage from '../../../images/world.png'
import AsiaImage from '../../../images/asia.png'
import EuropeImage from '../../../images/europe.png'
import AmericaImage from '../../../images/america.png'
import AtlanticImage from '../../../images/atlantic.png'
import ExploreImage from '../../../images/explore.png'
import SportImage from '../../../images/sport.png'
import { Colors } from '../../../styles/theme/index'


function NewsCategories() {
  const [selectedChip, setSelectedChip] = useState('世界')
  const { isLoading, setIsLoading, setSysMessage } = useAppContext()
  const { setNews, getNewsAPI } = useNewsContext()
  const [value, setValue] = useState('Chinese')
  const [worldShow, setWorldShow] = useState(false)
  const [asiaShow, setAsiaShow] = useState(false)
  const [europeShow, setEuropeShow] = useState(false)
  const [americaShow, setAmericaShow] = useState(false)
  const [atlanticShow, setAtlanticShow] = useState(false)
  const [exploreShow, setExploreShow] = useState(false)
  const [sportShow, setSportShow] = useState(false)


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

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleWorldShow = () => {
    setWorldShow(!worldShow)
  }

  const handleAsiaShow = () => {
    setAsiaShow(!asiaShow)
  }

  const handleEuropeShow = () => {
    setEuropeShow(!europeShow)
  }

  const handleAmericaShow = () => {
    setAmericaShow(!americaShow)
  }

  const handleAtlanticShow = () => {
    setAtlanticShow(!atlanticShow)
  }

  const handleExploreShow = () => {
    setExploreShow(!exploreShow)
  }

  const handleSportShow = () => {
    setSportShow(!sportShow)
  }

  useEffect(() => {
    getNews(selectedChip)
    // eslint-disable-next-line
  }, [])


  const ChineseCountryCategory = () => {
    return (
      <>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={WorldImage} onClick={handleWorldShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>世界</Typography>
        </Stack>
        {worldShow &&
          defaultWorldCategories.map((item) => (
            < Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={AsiaImage} onClick={handleAsiaShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>亚洲和中东</Typography>
        </Stack>
        {asiaShow &&
          defaultAsiaCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={EuropeImage} onClick={handleEuropeShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>欧洲</Typography>
        </Stack>
        {europeShow &&
          defaultEuropeCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={AmericaImage} onClick={handleAmericaShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>美洲</Typography>
        </Stack>
        {americaShow &&
          defaultAmericaCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={AtlanticImage} onClick={handleAtlanticShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>大洋洲</Typography>
        </Stack>
        {atlanticShow &&
          defaultAtlanticCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
      </>
    )
  }


  const EnglishCountryCategory = () => {
    return (
      <>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={WorldImage} onClick={handleWorldShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>World</Typography>
        </Stack>
        {worldShow &&
          defaultWorldCategories.map((item) => (
            < Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={AsiaImage} onClick={handleAsiaShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>Asia&Middle East</Typography>
        </Stack>
        {asiaShow &&
          defaultAsiaCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={EuropeImage} onClick={handleEuropeShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>Europe</Typography>
        </Stack>
        {europeShow &&
          defaultEuropeCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={AmericaImage} onClick={handleAmericaShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>America</Typography>
        </Stack>
        {americaShow &&
          defaultAmericaCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={AtlanticImage} onClick={handleAtlanticShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>Atlantic</Typography>
        </Stack>
        {atlanticShow &&
          defaultAtlanticCategories.map((item) => (
            <Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
      </>
    )
  }

  const ChineseTopicCategory = () => {
    return (
      <>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={ExploreImage} onClick={handleExploreShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>探讨</Typography>
        </Stack>
        {exploreShow &&
          defaultExploreCategories.map((item) => (
            < Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
      </>
    )
  }

  const EnglishTopicCategory = () => {
    return (
      <>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={ExploreImage} onClick={handleExploreShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>Explore</Typography>
        </Stack>
        {exploreShow &&
          defaultExploreCategories.map((item) => (
            < Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
      </>
    )
  }

  const ChineseSportCategory = () => {
    return (
      <>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={SportImage} onClick={handleSportShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>运动</Typography>
        </Stack>
        {sportShow &&
          defaultSportCategories.map((item) => (
            < Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.name ? 'filled' : 'outlined'}
              label={item.name} onClick={() => handleClick(item.name)} />
          ))
        }
      </>
    )
  }

  const EnglishSportCategory = () => {
    return (
      <>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={SportImage} onClick={handleSportShow} alt='Country' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>Sport</Typography>
        </Stack>
        {sportShow &&
          defaultSportCategories.map((item) => (
            < Chip sx={{ m: '2px' }} key={item.id} variant={selectedChip === item.ename ? 'filled' : 'outlined'}
              label={item.ename} onClick={() => handleClick(item.ename)} />
          ))
        }
      </>
    )
  }

  return (
    <>
      <Box disabled={isLoading} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
        <FormControl>
          <FormLabel>新闻/News</FormLabel>
          <RadioGroup row value={value} onChange={handleChange}>
            <FormControlLabel value="Chinese" control={<Radio />} label="中文" />
            <FormControlLabel value="English" control={<Radio />} label="English" />
          </RadioGroup>
        </FormControl>
        {value === 'Chinese' && <ChineseCountryCategory />}
        {value === 'English' && <EnglishCountryCategory />}
        {value === 'Chinese' && <ChineseTopicCategory />}
        {value === 'English' && <EnglishTopicCategory />}
        {value === 'Chinese' && <ChineseSportCategory />}
        {value === 'English' && <EnglishSportCategory />}
      </Box>
      <Box mt={1}>
        <Message />
      </Box>
    </>
  )
}

export default NewsCategories