import React from 'react'
import { Box, Tooltip, IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useVideoContext } from '../../../context/VideoContext';
import { useAppContext } from '../../../context/AppContext';

function VideoList({ selectedCategory, selectedSubCategory }) {
    const { videos, setVideos, setVideo, getVideoAPI, deleteVideoAPI } = useVideoContext()
    const { setIsLoading, setSysMessage, setIsEdit } = useAppContext()


    const getVideo = async (id) => {
        setIsLoading(true)
        setSysMessage(null)
        const { okStatus, data } = await getVideoAPI(id)
        if (okStatus) {
            setVideo(data)
        }
        else {
            setSysMessage(data)
        }
        setIsLoading(false)
    }

    const deleteVideo = async (id) => {
        const { okStatus, data } = await deleteVideoAPI(id)
        setIsLoading(true)
        setSysMessage(null)
        if (okStatus) {
            const newVideos = videos.filter((item) => (item._id !== id))
            setVideos(newVideos)
            setSysMessage(null)
        } else {
            setSysMessage(data)
        }
        setIsLoading(false)
    }

    const handlleEditClick = (id) => {
        setIsEdit(true)
        getVideo(id)
    }

    const handleDeleteClick = (id) => {
        deleteVideo(id)
    }

    const videoData = videos.filter((item) => (item.category === selectedCategory && item.subCategory === selectedSubCategory))
        .sort((a, b) => { return a.id - b.id })

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


    return (
        <Box sx={{ height: 540, width: '100%' }}>
            <DataGrid
                density='compact'
                checkboxSelection={false}
                disableMultipleSelection={true}
                disableSelectionOnClick={true}
                rows={videoData}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
            />
        </Box>
    )
}

export default VideoList