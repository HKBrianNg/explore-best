import { useState } from 'react'
import { Grid, Box, Button, LinearProgress, Typography } from '@mui/material'
import Navbar from '../navbar/Navbar'
import ProfileSetup from './profile/ProfileSetup'
import VideoSetup from './video/VideoSetup'
import TopicSetup from './topic/TopicSetup'
import { useAppContext } from '../../context/AppContext'


const featureList = [
    { id: "0", name: 'Profile' },
    { id: "1", name: 'Topic' },
    { id: "2", name: 'Video', }
]



function Setup() {
    const [selectedFeature, setSelectedFeature] = useState('Profile')
    const { isLoading, sysMessage } = useAppContext()

    const handleClick = (name) => {
        setSelectedFeature(name)
    }


    return (
        <>
            <Navbar />
            {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
            {<Typography variant="h6" component="h6" align='left' color='red' mt={4} >{sysMessage}</Typography>}
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
        </>
    )
}

export default Setup