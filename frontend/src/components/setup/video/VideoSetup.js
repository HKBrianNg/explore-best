import { useState } from 'react'
import { Grid, Box, Typography, } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import VideoSearch from './VidoeSearch'
import VideoList from './VideoList'
import VideoForm from './VideoForm'
import { useAppContext } from '../../../context/AppContext'


function VideoSetup() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState("")
    const { isLoading, sysMessage } = useAppContext()

    return (
        <>
            <Grid item xs={12} md={4}>
                <VideoForm />
            </Grid>
            <Grid item xs={12} md={8} >
                <VideoSearch setSelectedCategory={setSelectedCategory} setSelectedSubCategory={setSelectedSubCategory} />
                <VideoList selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />
            </Grid >
            {isLoading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>}
            {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
        </>
    )
}

export default VideoSetup