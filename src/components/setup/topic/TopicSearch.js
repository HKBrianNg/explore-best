import { useState } from 'react'
import { Box, Paper, Autocomplete, TextField, Button } from '@mui/material'
import { useAppContext } from '../../../context/AppContext'
import { useTopicContext } from '../../../context/TopicContext'
import { allCategories } from '../../../constant'


const ObjectFieldToList = (objectList) => {
    const list = []
    list.push("")
    for (var i = 0; i < objectList.length; i++)
        list.push(objectList[i].name)
    return list
}

const allCategoryList = ObjectFieldToList(allCategories)

function TopicSearch({ setSelectedCategory }) {
    const [category, setcategory] = useState("")
    const { isLoading, setIsLoading, setSysMessage } = useAppContext()
    const { setTopics, getTopicsAPI } = useTopicContext()


    const getTopics = async () => {
        setIsLoading(true)
        setSysMessage("loading...")
        const { okStatus, data } = await getTopicsAPI()
        okStatus ? setTopics(data) : setSysMessage(data)
        setIsLoading(false)
        setSysMessage(null)
    }

    const handleCategoryChange = (event, newValue) => {
        if (newValue) {
            setcategory(newValue)
            setSelectedCategory(newValue)
            setSysMessage(null)
        }
    }

    const handleSearchClick = () => {
        getTopics()
    }

    return (
        <Box sx={{ mt: 1 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Autocomplete
                    disablePortal
                    value={category}
                    onChange={handleCategoryChange}
                    size='small'
                    options={allCategoryList}
                    sx={{ width: 300, mb: 1 }}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
                <Button variant="contained" fullWidth disabled={isLoading} onClick={handleSearchClick}>Search</Button>
            </Paper>
        </Box>
    )
}

export default TopicSearch