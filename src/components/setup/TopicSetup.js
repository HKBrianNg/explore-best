import { Grid, Box, Stack, Paper, Autocomplete, Tooltip, IconButton, TextField, Typography, Button, LinearProgress } from '@mui/material'
import { allCategories } from '../../constant'
import { useState } from 'react'
import { Colors } from '../../styles/theme/index'
import { SysMsg } from '../../constant'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const initialTopic = {
    id: "",
    category: "",
    subCategory: "",
    title: "",
    summary: "",
    content: "",
    contentUrl: ""
}


function TopicSetup() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [sysMessage, setSysMessage] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [topic, setTopic] = useState(initialTopic)
    const [topics, setTopics] = useState([])

    // interface with backend
    const getTopic = (id) => {
        setIsLoading(true)
        setSysMessage("loading...")
        setTimeout((id) => {
            setIsLoading(false)
            setSysMessage(null)
        }, 2000)
    }

    const getTopics = () => {
        setIsLoading(true)
        setSysMessage("loading...")
        setTimeout(() => {
            setIsLoading(false)
            setSysMessage(null)
        }, 2000)
    }

    const deleteTopic = (id) => {
        setIsLoading(true)
        setSysMessage("deleting...")
        setTimeout((id) => {
            setIsLoading(false)
            setSysMessage(null)
        }, 2000)
    }

    const updateTopic = () => {
        setIsLoading(true)
        setSysMessage("updating...")
        setTimeout(() => {
            setIsLoading(false)
            setSysMessage(null)
        }, 2000)
    }

    const createTopic = () => {
        setIsLoading(true)
        setSysMessage("creating...")
        setTimeout(() => {
            setIsLoading(false)
            setSysMessage(null)
        }, 2000)
    }


    // search handling
    const handleCategoryChange = (event, newValue) => {
        if (newValue) {
            setSelectedCategory(newValue)
            setTopic({ ...topic, category: newValue.name })
            setSysMessage(null)
        }
    }

    const handleSearchClick = () => {
        getTopics()
    }

    // search UI
    const SearchBlock = (
        <Box sx={{ mt: 1 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Autocomplete
                    disablePortal
                    onChange={handleCategoryChange}
                    size='small'
                    options={allCategories}
                    sx={{ width: 300, mb: 1 }}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
                <Button variant="contained" fullWidth disabled={isLoading} onClick={handleSearchClick}>Search</Button>
            </Paper>
        </Box>
    )

    // form handling
    const handleTopicChange = (event) => {
        setTopic({ ...topic, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectedCategory) {
            isEdit ? updateTopic() : createTopic()
        } else {
            setSysMessage(SysMsg[3])
        }
        setIsEdit(false)

    }

    const handleCancel = () => {
        setTopic(initialTopic)
        setIsEdit(false)
    }

    // Form UI
    const FormBlock = (
        <Box sx={{ mt: 2 }} component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                    <Typography variant='h5'>{isEdit ? "Edit Topic" : "Create Topic"}</Typography>
                    <Stack direction="row" spacing={1}>
                        <TextField name="subCategory" variant='outlined' label="Sub Category" required size='small' onChange={handleTopicChange} value={topic.subCategory}></TextField>
                        <TextField name="id" variant='outlined' label="SEQ" required size='small' onChange={handleTopicChange} value={topic.id}></TextField>
                    </Stack>
                    <TextField name="title" variant='outlined' label="Title" required fullWidth size='small' onChange={handleTopicChange} value={topic.title}></TextField>
                    <TextField name="summary" variant='outlined' label="Summary" required fullWidth multiline minRows={2} maxRows={4} size='small' onChange={handleTopicChange} value={topic.summary}></TextField>
                    <TextField name="content" variant='outlined' label="Content" fullWidth multiline minRows={2} maxRows={4} size='small' onChange={handleTopicChange} value={topic.content}></TextField>
                    <TextField name="contentUrl" variant='outlined' label="URL" fullWidth size='small' onChange={handleTopicChange} value={topic.contentUrl}></TextField>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" type='Submit' disabled={isLoading}>Submit</Button>
                        <Button variant="contained" onClick={handleCancel} disabled={isLoading}>Cancel</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Box >
    )

    // Search Result UI
    const handlleEditClick = (id) => {
        getTopic(id)
        setIsEdit(true)
    }

    const handleDeleteClick = (id) => {
        deleteTopic(id)
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
        { field: 'title', headerName: 'Title', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'summary', headerName: 'Summary', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'content', headerName: 'Content', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: 'contentUrl', headerName: 'URL', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', },
        { field: '_id', headerName: '_ID', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', }
    ]

    const SearchResultBlock = (
        <Box sx={{ height: 540, width: '100%', m: 1 }}>
            <DataGrid
                density='compact'
                rows={topics}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </Box>
    )



    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                {SearchBlock}
                {FormBlock}
            </Grid>
            <Grid item xs={12} md={8}>
                {SearchResultBlock}
            </Grid>
            {isLoading && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
            {<Typography variant='subtitle1' color={Colors.deep_orange}>{sysMessage}</Typography>}
        </Grid>
    )
}

export default TopicSetup