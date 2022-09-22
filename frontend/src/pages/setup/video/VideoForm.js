import { Box, Typography, Button, Stack, TextField, Paper, } from '@mui/material'
import { SysMsg } from '../../../constant'
import { useVideoContext } from '../../../context/VideoContext'
import { useAppContext } from '../../../context/AppContext'
import { useTranslation } from 'react-i18next'


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

function VideoForm() {
    const { video, setVideo, videos, setVideos, updateVideoAPI, createVideoAPI, } = useVideoContext()
    const { isEdit, setIsEdit, isLoading, setIsLoading, setSysMessage } = useAppContext()
    const { t } = useTranslation(["common"])

    const createVideo = async () => {
        const { okStatus, data } = await createVideoAPI(video)
        if (okStatus) {
            setVideos(current => [...current, data])
            setVideo(initialVideo)
            setIsEdit(false)
            setSysMessage(null)
        }
        else {
            setSysMessage(data)
        }
        setIsLoading(false)
    }

    const updateVideo = async (id) => {
        const { okStatus, data } = await updateVideoAPI(video, id)
        if (okStatus) {
            const newVideoData = videos.map((el) => (el._id === id ? video : el))
            setVideos(newVideoData)
            setVideo(initialVideo)
            setIsEdit(false)
            setSysMessage(null)
        }
        else {
            setSysMessage(data)
        }
        setIsLoading(false)
    }

    const handleChange = (e) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!video.videoId) {
            setSysMessage(SysMsg[1])
        } else {
            setIsLoading(true)
            if (!isEdit) {
                await createVideo()
            } else {
                await updateVideo(video._id)
            }
        }
    }

    const handleDecodeURL = () => {
        const videoId = video.videoUrl.substring(32)
        const url = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        setVideo({ ...video, videoId: videoId, thumbnailUrl: url })
        setSysMessage(null)
    }

    const handleCancel = () => {
        setVideo(initialVideo)
        setIsEdit(false)
        setSysMessage(null)
    }

    return (
        <Box flex={1} component="form" autoComplete="off" onSubmit={handleSubmit}
            sx={{ display: 'flex', justifyContent: 'center' }} >
            <Paper elevation={3}>
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <Typography variant="h5" component="h5" align='center' m={1} >
                        {isEdit ? 'Edit Video' : 'Create Video'}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} m={2}>
                    <TextField name="category" required fullWidth label="Category" size='small' value={video.category} onChange={handleChange} />
                    <TextField name="subCategory" required fullWidth label="Sub Category" size='small' value={video.subCategory} onChange={handleChange} />
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
                    <Button variant="contained" type='Submit' disabled={isLoading} >{t("Submit")}</Button>
                    <Button variant="contained" disabled={isLoading} onClick={handleCancel}>{t("Cancel")}</Button>
                    <Button variant="contained" disabled={isLoading} onClick={handleDecodeURL}>{t("Decode URL")}</Button>
                </Stack>
            </Paper>
        </Box>
    )
}

export default VideoForm