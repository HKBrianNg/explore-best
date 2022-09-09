import { Box, Tooltip, IconButton } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useAppContext } from '../../../context/AppContext'
import { useTopicContext } from '../../../context/TopicContext'


function TopicList({ selectedCategory }) {
    const { setIsLoading, setSysMessage, setIsEdit } = useAppContext()
    const { topics } = useTopicContext()

    const getTopic = (id) => {
        setIsLoading(true)
        setSysMessage("loading...")
        setTimeout((id) => {
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

    const columns = [
        {
            field: "edit", headerName: "Edit", sortable: false, width: 50, disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <>
                        <Tooltip title="Edit User">
                            <IconButton onClick={() => handleEditClick(params.row._id)}><EditIcon /></IconButton>
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


    var topicData = []
    console.log("data:", topics)
    console.log("category:", selectedCategory)
    topicData = topics.filter((item) => (item.category === selectedCategory))
        .sort((a, b) => { return a.id - b.id })


    const handleEditClick = (id) => {
        getTopic(id)
        setIsEdit(true)
    }

    const handleDeleteClick = (id) => {
        deleteTopic(id)
    }


    return (
        <>
            <Box sx={{ height: 500, width: '100%', }}>
                <DataGrid
                    density='compact'
                    rows={topicData}
                    columns={columns}
                    pageSize={100}
                    rowsPerPageOptions={[100]}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </Box>
        </>
    )
}

export default TopicList