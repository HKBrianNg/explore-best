import { useEffect } from 'react'
import Navbar from "../navbar/Navbar"
import Category from "./category/Category"
import Topic from "./topic/Topic"
import Banner from "./banner/Banner"
import Videos from "../videos/Videos"
import { Container, Grid, Typography, Box, LinearProgress } from '@mui/material'
import { useVideoContext } from '../../context/VideoContext'
import { useAppContext } from '../../context/AppContext'
import { useTopicContext } from '../../context/TopicContext'


function Home() {
    const { videos, setVideos, getVideosAPI } = useVideoContext()
    const { isReady, setIsReady, isLoading, setIsLoading, sysMessage, setSysMessage } = useAppContext()
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
                {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
                {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
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

export default Home