import { useState } from 'react'
import { Box, Stack, Paper, TextField, Typography, Button } from '@mui/material'
import { useAppContext } from '../../../context/AppContext'


const initialTopic = {
    id: "",
    category: "",
    subCategory: "",
    title: "",
    summary: "",
    content: "",
    contentUrl: ""
}

function TopicForm() {
    const [topic, setTopic] = useState(initialTopic)
    const { isEdit, setIsEdit, isLoading, setIsLoading, setSysMessage } = useAppContext()

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

    const handleTopicChange = (event) => {
        setTopic({ ...topic, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit:", topic)
        isEdit ? updateTopic() : createTopic()
        setIsEdit(false)
    }

    const handleCancel = () => {
        setTopic(initialTopic)
        setIsEdit(false)
    }

    return (
        <Box sx={{ mt: 1, mr: 1 }} component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                    <Typography variant='h5'>{isEdit ? "Edit Topic" : "Create Topic"}</Typography>
                    <Stack direction="row" spacing={1}>
                        <TextField name="category" variant='outlined' label="Category" required size='small' onChange={handleTopicChange} value={topic.subCategory}></TextField>
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
}

export default TopicForm