import { useState } from 'react'
import { Container, Grid, Box, Button } from '@mui/material'
import Navbar from '../navbar/Navbar'
import ProfileSetup from './ProfileSetup'
import VideoSetup from './VideoSetup'
import TopicSetup from './TopicSetup'


const featureList = [
    { id: "0", name: 'Profile' },
    { id: "1", name: 'Topic' },
    { id: "2", name: 'Video', }
]



function Setup() {
    const [selectedFeature, setSelectedFeature] = useState('Profile')

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
                            {
                                featureList.map((item) => (
                                    <Button
                                        key={item.id}
                                        variant={selectedFeature === item.name ? "contained" : "outlined"}
                                        onClick={() => handleClick(item.name)}
                                        sx={{ m: '2px' }}
                                    >
                                        {item.name}
                                    </Button>
                                ))
                            }
                        </Box>

                    </Grid>
                    {selectedFeature === 'Profile' && <ProfileSetup />}
                    {selectedFeature === 'Topic' && <TopicSetup />}
                    {selectedFeature === 'Video' && <VideoSetup />}
                </Grid>
            </Container>
        </>
    )
}

export default Setup