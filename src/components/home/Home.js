import { useState, useEffect } from 'react'
import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import SubCategory from "../subcategory/SubCategory"
import Banner from "../banner/Banner"
import Videos from "../videos/Videos"
import { Container, Grid, Typography, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useVideoContext } from '../../context/VideoContext'
import { useAppContext } from '../../context/AppContext'


function Home() {
    const { videos, setVideos, getVideosAPI } = useVideoContext()
    const { isReady, setIsReady } = useAppContext()
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (!isReady) {
            getVideos()
            setIsReady(true)
            console.log("System is ready:", videos)
        }
        // eslint-disable-next-line
    }, [])


    const getVideos = async () => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await getVideosAPI()
        okStatus ? setVideos(data) : setErrorMessage(data)
        setIsLoading(false)
    }

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                {isLoading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>}
                {errorMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{errorMessage}</Typography>}
                {videos && <>
                    <Grid container spacing={1} direction='row' justifyContent='flex-start' alignItems='flex-start' wrap="wrap" mt={3}>
                        <Grid item xs={12} md={3}>
                            <Category />
                            <Banner />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <SubCategory />
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