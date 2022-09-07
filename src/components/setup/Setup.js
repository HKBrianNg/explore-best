import { useState } from 'react'
import { Container, Grid, Box, Chip } from '@mui/material'
import Navbar from '../navbar/Navbar'
import VideoSetup from './VideoSetup'
import CategorySetup from './CategorySetup'
import SubCategorySetup from './SubCategorySetup'


const featureList = [
    { id: "0", name: 'Category Setup' },
    { id: "1", name: 'Sub Category Setup' },
    { id: "2", name: 'Video Setup', }
]



function Setup() {
    const [selectedFeature, setSelectedFeature] = useState('Video Setup')

    const handleClick = (name) => {
        setSelectedFeature(name)
    }


    return (
        <>
            <Navbar />
            <Container maxWidth='xl' sx={{ mt: 3 }}>
                <Grid container spacing={0.5} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Box>
                            {featureList.map((item) => (
                                <Chip
                                    key={item.id}
                                    onClick={() => handleClick(item.name)}
                                    label={item.name}
                                    variant={selectedFeature === item.name ? "filled" : "outlined"}
                                    sx={{ m: '1px' }}
                                />
                            ))}
                        </Box>
                    </Grid>
                    {selectedFeature === 'Category Setup' && <CategorySetup />}
                    {selectedFeature === 'Sub Category Setup' && <SubCategorySetup />}
                    {selectedFeature === 'Video Setup' && <VideoSetup />}
                </Grid>
            </Container>
        </>
    )
}

export default Setup