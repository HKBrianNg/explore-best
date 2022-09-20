import { useEffect } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Category from "./category/Category"
import Topic from "./topic/Topic"
import Banner from "./banner/Banner"
import Videos from "./videos/Videos"
import { Container, Grid, } from '@mui/material'
import { useVideoContext } from '../../context/VideoContext'
import { useAppContext } from '../../context/AppContext'
import { useTopicContext } from '../../context/TopicContext'
import Message from '../../components/message/Message'


function Info() {
  const { videos, setVideos, getVideosAPI } = useVideoContext()
  const { isReady, setIsReady, setIsLoading, setSysMessage } = useAppContext()
  const { topics, setTopics, getTopicsAPI } = useTopicContext()

  const getVideos = async () => {
    setIsLoading(true)
    setSysMessage(null)
    const { okStatus, data } = await getVideosAPI()
    okStatus ? setVideos(data) : setSysMessage(data)
    setIsLoading(false)
  }

  const getTopics = async () => {
    setIsLoading(true)
    setSysMessage(null)
    const { okStatus, data } = await getTopicsAPI()
    okStatus ? setTopics(data) : setSysMessage(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isReady) {
      getTopics()
      getVideos()
      setIsReady(true)

    }
    console.log("System is ready:", videos, topics)
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Message />
        {(topics && videos) && <>
          <Grid container spacing={1} direction='row' justifyContent='flex-start' alignItems='flex-start' wrap="wrap" mt={3}>
            <Grid item xs={12} md={3}>
              <Category />
              <Banner />
            </Grid>
            <Grid item xs={12} md={9}>
              <Topic />
              <Videos />
            </Grid>
          </Grid>
        </>
        }
      </Container>
    </>
  )
}

export default Info