import { useState } from 'react'
import { Autocomplete, Box, Button, Stack, TextField, Paper, } from '@mui/material'
import { allCategories } from '../../../constant'
import { useAppContext } from '../../../context/AppContext'
import { useTopicContext } from '../../../context/TopicContext'
import { useVideoContext } from '../../../context/VideoContext'


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

function VidoeSearch({ setSelectedCategory, setSelectedSubCategory }) {
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [subCategoryList, setSubCategoryList] = useState([])
    const { setVideos, getVideosAPI } = useVideoContext()
    const { isLoading, setIsLoading, setSysMessage } = useAppContext()
    const { topics } = useTopicContext()

    const getVideos = async () => {
        setIsLoading(true)
        setSysMessage(null)
        const { okStatus, data } = await getVideosAPI()
        if (okStatus) {
            setVideos(data)
        }
        else {
            setSysMessage(data)
        }
        setIsLoading(false)
    }

    const handleCategoryChange = (event, newValue) => {
        const data = topics.filter((item) => (item.category === newValue))
        const listData = ObjTopicsToArray(data)
        setSubCategoryList(listData)
        setSubCategory(null)
        setCategory(newValue)
        setSelectedCategory(newValue)
    }

    const handleSubCategoryChange = (event, newValue) => {
        setSubCategory(newValue)
        setSelectedSubCategory(newValue)
    }

    const handleSearch = () => {
        getVideos()
    }

    return (
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
}

export default VidoeSearch