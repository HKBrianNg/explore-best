import { Box, Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Colors } from '../../styles/theme/index'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideoContext } from '../../context/VideoContext'
import CircularProgress from '@mui/material/CircularProgress'
import { useAppContext } from '../../context/AppContext';

function Videos() {
    const { videos, setVideos, getVideosAPI } = useVideoContext()
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { selectedCategory, selectedSubCategory } = useAppContext()

    useEffect(() => {
        getVideos()
        // eslint-disable-next-line
    }, [])


    const getVideos = async () => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await getVideosAPI()
        okStatus ? setVideos(data) : setErrorMessage(data)
        setIsLoading(false)
    }

    const openVideo = (videoId) => {
        navigate(`/video/${videoId}`, { replace: true })
    }

    const data = videos.filter((video) => (video.category === selectedCategory && video.subCategory === selectedSubCategory))
    return (
        <>
            {isLoading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>}
            {errorMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{errorMessage}</Typography>}
            <Box sx={{ flexGrow: 1, padding: 1, display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {data.map((item, i) => (
                    <Card key={i} sx={{ maxWidth: 250, padding: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            width="400"
                            image={item.thumbnailUrl}
                            alt={item.title}
                            onClick={() => openVideo(item.videoId)}
                        />
                        <CardHeader sx={{ color: Colors.deep_orange, }}
                            avatar={<Avatar sx={{ bgcolor: Colors.deep_orange, width: 56, height: 56 }}>Save</Avatar>}
                            action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                            title={item.title}
                            subheader={item.publishedAt}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>

    )
}

export default Videos