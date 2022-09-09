import { useEffect, useState } from 'react'
import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import SubCategory from "../subcategory/SubCategory"
import Videos from "../videos/Videos"
import { Container, Grid, Typography, Box, TextField, Stack, Paper, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { SysMsg } from '../../constant'
import { useVideoContext } from '../../context/VideoContext'
import { useAppContext } from '../../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'


const initialVideo = {
    id: "",
    category: "",
    subCategory: "",
    source: "youtube#video",
    videoUrl: "",
    videoId: "",
    publishedAt: "",
    title: "",
    description: "",
    thumbnailUrl: ""
}


function VideoSetup() {
    const [video, setVideo] = useState(initialVideo)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { videos, setVideos, getVideoAPI, createVideoAPI, updateVideoAPI, selectedId, setSelectedId } = useVideoContext()
    const { selectedCategory, selectedSubCategory } = useAppContext()
    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        if (id !== '0') {
            console.log("ID:", selectedId)
            getVideo()
        } else {
            setVideo(initialVideo)
            setVideo({ ...video, category: selectedCategory, subCategory: selectedSubCategory })
        }
        // eslint-disable-next-line
    }, [selectedId])

    const handleChange = (e) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const getVideo = async () => {
        const { okStatus, data } = await getVideoAPI(selectedId)
        if (okStatus) {
            setVideo(data)
        }
        else {
            setErrorMessage(data)
        }
    }

    const createVideo = async () => {
        const { okStatus, data } = await createVideoAPI(video)
        if (okStatus) {
            handleCancel()
            setVideos(current => [...current, data])
            setVideo(initialVideo)
        }
        else {
            setErrorMessage(data)
        }
    }

    const updateVideo = async () => {
        const { okStatus, data } = await updateVideoAPI(video, selectedId)
        if (okStatus) {
            handleCancel()
            const newVideoData = videos.map(el => el._id === data._id ? data : el)
            setVideos(newVideoData)
            setSelectedId('0')
        }
        else {
            setErrorMessage(data)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!video.videoId) {
            setErrorMessage(SysMsg[1])
        } else {
            setIsLoading(true)
            if (selectedId === '0') {
                await createVideo()
            } else {
                await updateVideo()
            }
            setIsLoading(false)
            setSelectedId("0")
            setVideo(initialVideo)
            setVideo({ ...video, category: selectedCategory, subCategory: selectedSubCategory })
        }
    }

    const handleDecodeURL = () => {
        const videoId = video.videoUrl.substring(32)
        const url = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        setVideo({ ...video, videoId: videoId, thumbnailUrl: url })
        setErrorMessage('')
    }

    const handleCancel = () => {
        setVideo(initialVideo)
        setSelectedId("0")
        navigate("/", { replace: true })

    }

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container spacing={1}
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    wrap="wrap"
                >
                    <Grid item xs={12} md={3}>
                        <Category />
                        <SubCategory />
                        <>
                            <Stack direction='row'>
                                <Box flex={1} component="form" autoComplete="off" onSubmit={handleSubmit}
                                    sx={{ display: 'flex', justifyContent: 'center' }} >
                                    <Paper elevation={3}>
                                        <Stack direction='row' alignItems='center' justifyContent='center'>
                                            <Typography variant="h5" component="h5" align='center' m={1} >
                                                {selectedId !== "0" ? 'Edit Video' : 'Create Video'}
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={2} m={2}>
                                            <TextField name="category" required fullWidth disabled label="Category" size='small' value={video.category} onChange={handleChange} />
                                            <TextField name="subCategory" required fullWidth disabled label="Sub Category" size='small' value={video.subCategory} onChange={handleChange} />
                                            <TextField name="id" required fullWidth label="ID" size='small' value={video.id} onChange={handleChange} />
                                        </Stack>
                                        <Stack direction="row" spacing={2} m={2}>
                                            <TextField name="videoUrl" fullWidth label="Video URL" size='small' value={video.videoUrl} onChange={handleChange} />
                                        </Stack>
                                        <Stack direction="row" spacing={2} m={2}>
                                            <TextField name="videoId" required label="Video ID" size='small' value={video.videoId} onChange={handleChange} />
                                            <TextField name="publishedAt" required label="Published At" size='small' value={video.publishedAt} onChange={handleChange} />
                                        </Stack>
                                        <Stack direction="column" spacing={2} m={2}>
                                            <TextField name="title" fullWidth required label="Title" size='small' multiline minRows={2} maxRows={2} value={video.title} onChange={handleChange} />
                                            <TextField name="description" fullWidth label="Description" size='small' multiline minRows={2} maxRows={4} value={video.description} onChange={handleChange} />
                                        </Stack>
                                        <Stack direction='row' spacing={2} m={2}>
                                            <Button variant="contained" type='Submit' disabled={isLoading} >Submit</Button>
                                            <Button variant="contained" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                                            <Button variant="contained" disabled={isLoading} onClick={handleDecodeURL}>Decode URL</Button>
                                            {isLoading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>}
                                        </Stack>
                                        {errorMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{errorMessage}</Typography>}
                                    </Paper>
                                </Box>
                            </Stack>
                        </>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Videos />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default VideoSetup