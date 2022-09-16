import { useState } from 'react'
import { Grid, Box, Button, Typography, LinearProgress } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import Navbar from '../navbar/Navbar'
import BodyExercise from './bodyExercise/BodyExercise'
import CalculateBMI from './calculateBMI/CalculateBMI'
import CalculateTDEE from './calculateTDEE/CalculateTDEE'
import SearchVideos from './searchVideos/SearchVideos'


const featureList = [
  { id: "0", name: 'Exercises' },
  { id: "1", name: 'BMI Calculator' },
  { id: "2", name: 'TDEE Calculator', },
  { id: "3", name: 'Search Videos', }
]

function Fitness() {
  const { isLoading, sysMessage } = useAppContext()
  const [selectedFeature, setSelectedFeature] = useState('Profile')

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
        {selectedFeature === 'Exercises' && <BodyExercise />}
        {selectedFeature === 'BMI Calculator' && <CalculateBMI />}
        {selectedFeature === 'TDEE Calculator' && <CalculateTDEE />}
        {selectedFeature === 'Search Videos' && <SearchVideos />}
      </Grid>
    </>
  )
}

export default Fitness