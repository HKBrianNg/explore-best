import { useState } from 'react'
import { Autocomplete, Grid, Box, Typography, Button, Stack, TextField, Paper, IconButton, Tooltip } from '@mui/material'
import { useVideoContext } from '../../../context/VideoContext'
import CircularProgress from '@mui/material/CircularProgress'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { DataGrid } from '@mui/x-data-grid';
import { SysMsg } from '../../../constant'
import { allCategories } from '../../../constant'
import { useTopicContext } from '../../../context/TopicContext'

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

const ObjLabelToArray = (objList) => {
    var list = []
    list.push("")
    for (var i = 0; i < objList.length; i++) {
        list.push(objList[i].label);
    }
    return list
}

const ObjTopicsToArray = (objList) => {
    var list = []
    list.push("")
    for (var i = 0; i < objList.length; i++) {
        list.push(objList[i].subCategory);
    }
    return list
}

const categoryList = ObjLabelToArray(allCategories)



function VideoSetup() {
    const [isEdit, setIsEdit] = useState(false)
    const [video, setVideo] = useState(initialVideo)
    const [videoData, setVideoData] = useState([])
    const [subCategoryList, setSubCategoryList] = useState([])
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { getVideoAPI, getVideosAPI, updateVideoAPI, createVideoAPI, deleteVideoAPI } = useVideoContext()
    const { topics } = useTopicContext()


    // functions
    const getVideos = async () => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await getVideosAPI()
        if (okStatus) {
            setVideoData(data)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const getVideo = async (id) => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await getVideoAPI(id)
        if (okStatus) {
            setVideo(data)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const createVideo = async () => {
        const { okStatus, data } = await createVideoAPI(video)
        if (okStatus) {
            setVideoData(current => [...current, data])
            setVideo(initialVideo)
            setIsEdit(false)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const updateVideo = async (id) => {
        const { okStatus, data } = await updateVideoAPI(video, id)
        if (okStatus) {
            const newVideoData = videoData.map((el) => (el._id === id ? video : el))
            setVideoData(newVideoData)
            setVideo(initialVideo)
            setIsEdit(false)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const deleteVideo = async (id) => {
        const { okStatus, data } = await deleteVideoAPI(id)
        setIsLoading(true)
        setErrorMessage('')
        if (okStatus) {
            const newVideos = videoData.filter((item) => (item._id !== id))
            setVideoData(newVideos)
            setErrorMessage('')
        } else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const handleChange = (e) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handlleEditClick = (id) => {
        setIsEdit(true)
        getVideo(id)
    }

    const handleDeleteClick = (id) => {
        deleteVideo(id)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!video.videoId) {
            setErrorMessage(SysMsg[1])
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
        setErrorMessage('')
    }

    const handleCancel = () => {
        setVideo(initialVideo)
        setIsEdit(false)
    }

    const handleCategoryChange = (event, newValue) => {
        const data = topics.filter((item) => (item.category === newValue))
        const listData = ObjTopicsToArray(data)
        setSubCategoryList(listData)
        setSubCategory(null)
        setCategory(newValue)
    }

    const handleSubCategoryChange = (event, newValue) => {
        setSubCategory(newValue)
    }

    const handleSearch = () => {
        getVideos()

    }

    const columns = [
        {
            field: "edit", headerName: "Edit", sortable: false, width: 50, disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <>
                        <Tooltip title="Edit User">
                            <IconButton onClick={() => handlleEditClick(params.row._id)}><EditIcon /></IconButton>
                        </Tooltip>
                    </>
                )
            }
        },
        {
            field: "delete", headerName: "Delete", sortable: false, width: 60, disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <>
                        <Tooltip title="Delete User">
                            <IconButton onClick={() => handleDeleteClick(params.row._id)}><DeleteIcon /></IconButton>
                        </Tooltip>
                    </>
                )
            }
        },
        { field: 'category', headerName: 'Category', width: 150, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'subCategory', headerName: 'Sub Category', width: 150, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'id', headerName: 'SEQ', width: 30, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'videoId', headerName: 'Video ID', width: 150, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'publishedAt', headerName: 'PublishedAt', width: 150, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'title', headerName: 'Title', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'description', headerName: 'Description', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'thumbnailUrl', headerName: 'Thumbnail URL', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'videoUrl', headerName: 'Video URL', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: '_id', headerName: '_ID', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', }
    ]

    const VideoSearch = (
        <Box sx={{ mb: 1 }}>
            <Paper elevation={3}>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <Autocomplete size='small' disablePortal fullWidth options={categoryList} value={category}
                        onChange={handleCategoryChange} sx={{ width: 220, margin: 1, padding: 0, }}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                    <Autocomplete size='small' disablePortal fullWidth options={subCategoryList} value={subCategory}
                        onChange={handleSubCategoryChange} sx={{ width: 220, margin: 1, padding: 0, }}
                        renderInput={(params) => <TextField {...params} label="Sub Category" />}
                    />
                    <Button variant="contained" fullWidth disabled={isLoading} onClick={handleSearch}>Search</Button>
                </Stack>
            </Paper>
        </Box>
    )

    const VideoForm = (
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
                    <Button variant="contained" type='Submit' disabled={isLoading} >Submit</Button>
                    <Button variant="contained" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" disabled={isLoading} onClick={handleDecodeURL}>Decode URL</Button>
                </Stack>
            </Paper>
        </Box>
    )

    const videos = videoData.filter((item) => (item.category === category && item.subCategory === subCategory))
        .sort((a, b) => { return a.id - b.id })

    const VideoList = (
        <Box sx={{ height: 540, width: '100%' }}>
            <DataGrid
                density='compact'
                checkboxSelection={false}
                disableMultipleSelection={true}
                disableSelectionOnClick={true}
                rows={videos}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
            />
        </Box>
    )


    return (
        <>
            <Grid item xs={12} md={4}>
                {VideoSearch}
                {VideoForm}
            </Grid>
            <Grid item xs={12} md={8} >
                {VideoList}
            </Grid >
            {isLoading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>}
            {errorMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{errorMessage}</Typography>}
        </>
    )
}

export default VideoSetup