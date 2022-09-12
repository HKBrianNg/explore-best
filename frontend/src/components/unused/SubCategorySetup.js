import { Grid, Stack, Box, Autocomplete, TextField, Paper, Button, Typography, Tooltip, IconButton } from '@mui/material'
import { allCategories } from '../../constant'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { useSubCategoryContext } from './SubCategoryContext'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'


const initialSubCategory = {
    id: "",
    category: "",
    subCategory: "",
    title: "",
    summary: "",
    content: "",
    contentUrl: ""
}

const ObjLabelToArray = (objList) => {
    var list = []
    list.push("")
    for (var i = 0; i < objList.length; i++) {
        list.push(objList[i].label);
    }
    return list
}

const categoryList = ObjLabelToArray(allCategories)

function SubCategorySetup() {
    const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState(initialSubCategory)
    const { subCategories, setSubCategories, getSubCategoriesAPI, getSubCategoryAPI,
        deleteSubCategoryAPI, createSubCategoryAPI, updateSubCategoryAPI } = useSubCategoryContext()


    const getSubCategory = async (id) => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await getSubCategoryAPI(id)
        if (okStatus) {
            setSubCategory(data)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const getSubCategories = async () => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await getSubCategoriesAPI()
        if (okStatus) {
            setSubCategories(data)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const createSubCategory = async () => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await createSubCategoryAPI(subCategory)
        if (okStatus) {
            setSubCategory(initialSubCategory)
            setIsEdit(false)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const updateSubCategory = async (id) => {
        setIsLoading(true)
        setErrorMessage('')
        const { okStatus, data } = await updateSubCategoryAPI(subCategory, id)
        if (okStatus) {
            setSubCategory(initialSubCategory)
            setIsEdit(false)
        }
        else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }

    const deleteSubCategory = async (id) => {
        const { okStatus, data } = await deleteSubCategoryAPI(id)
        setIsLoading(true)
        setErrorMessage('')
        if (okStatus) {
            const newSubCategories = subCategories.filter((item) => (item._id !== id))
            setSubCategories(newSubCategories)
            setErrorMessage('')
        } else {
            setErrorMessage(data)
        }
        setIsLoading(false)
    }


    const handlleEditClick = (id) => {
        setIsEdit(true)
        getSubCategory(id)
    }

    const handleDeleteClick = (id) => {
        deleteSubCategory(id)
    }

    const handleChange = (e) => {
        setSubCategory({ ...subCategory, [e.target.name]: e.target.value })
    }

    const handleCancel = () => {
        setSubCategory(initialSubCategory)
        setIsEdit(false)
    }

    const handleSearch = () => {
        getSubCategories()
    }

    const handleCategoryChange = (event, newValue) => {
        setCategory(newValue)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (!isEdit) {
            await createSubCategory()
        } else {
            await updateSubCategory()
        }
        setIsLoading(false)
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
        { field: '_id', headerName: '_ID', width: 220, align: 'center', hide: false, headerClassName: 'super-app-theme--header', }
    ]


    const SubCategorySearch = (
        <Box sx={{ mb: 1 }}>
            <Paper elevation={3}>
                <Autocomplete
                    onChange={handleCategoryChange} sx={{ width: 220, margin: 1, padding: 0, }}
                    size='small'
                    disablePortal
                    value={category}
                    options={categoryList}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
                <Button variant="contained" fullWidth disabled={isLoading} onClick={handleSearch}>Search</Button>
            </Paper>
        </Box>
    )

    const SubCategoryForm = (
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}
            sx={{ display: 'flex', justifyContent: 'center' }} >
            <Paper elevation={3}>
                <Typography variant="h5" component="h5" align='center' m={1} >{isEdit ? 'Edit Sub Category' : 'Create Sub Category'}</Typography>
                <Stack direction="row" spacing={2} m={2}>
                    <TextField name="category" required fullWidth label="Category" size='small' value={subCategory.category} onChange={handleChange} />
                    <TextField name="subCategory" required fullWidth label="SubCategory" size='small' value={subCategory.subCategory} onChange={handleChange} />
                    <TextField name="id" required fullWidth label="ID" size='small' value={subCategory.id} onChange={handleChange} />
                </Stack>

                <Stack direction="column" spacing={2} m={2}>
                    <TextField name="title" fullWidth required label="Title" size='small' multiline minRows={2} maxRows={2} value={subCategory.title} onChange={handleChange} />
                    <TextField name="summary" required label="Summary" size='small' multiline minRows={2} maxRows={4} value={subCategory.summary} onChange={handleChange} />
                    <TextField name="content" fullWidth label="Content" size='small' multiline minRows={2} maxRows={4} value={subCategory.content} onChange={handleChange} />
                    <TextField name="contentUrl" fullWidth label="Content URL" size='small' value={subCategory.contentUrl} onChange={handleChange} />
                </Stack>
                <Stack direction='row' spacing={2} m={2}>
                    <Button variant="contained" type='Submit' disabled={isLoading} >Submit</Button>
                    <Button variant="contained" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                </Stack>
                {isLoading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>}
                {errorMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{errorMessage}</Typography>}
            </Paper>
        </Box>
    )

    const subCategoriesData = subCategories.filter((item) => (item.category === category))
        .sort((a, b) => { return a.id - b.id })

    const SubCategoryList = (
        <Box sx={{ height: 540, width: '100%' }}>
            <DataGrid
                density='compact'
                checkboxSelection={false}
                disableMultipleSelection={true}
                disableSelectionOnClick={true}
                rows={subCategoriesData}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
            />
        </Box>
    )


    return (
        <Grid container mt={1}>
            <Grid item xs={12} md={4}>
                <Stack direction='column' alignItems='center'>
                    {SubCategorySearch}
                    {SubCategoryForm}
                </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
                {SubCategoryList}
            </Grid>
        </Grid>
    )
}

export default SubCategorySetup