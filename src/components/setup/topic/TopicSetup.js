import { useState } from 'react'
import { Grid, Box, Typography, LinearProgress } from '@mui/material'
import { Colors } from '../../../styles/theme/index'
import TopicForm from './TopicForm'
import TopicList from './TopicList'
import TopicSearch from './TopicSearch'
import { useAppContext } from '../../../context/AppContext'


function TopicSetup() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const { isLoading, sysMessage } = useAppContext()

    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <TopicForm />
            </Grid>
            <Grid item xs={12} md={8}>
                <TopicSearch setSelectedCategory={setSelectedCategory} />
                <TopicList selectedCategory={selectedCategory} />
            </Grid>
            {isLoading && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
            {<Typography variant='subtitle1' color={Colors.deep_orange}>{sysMessage}</Typography>}
        </Grid>
    )
}

export default TopicSetup