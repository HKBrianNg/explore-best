import { Container, Grid, Box, Typography, LinearProgress } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import Navbar from '../navbar/Navbar'
import BodyParts from './BodyParts'
import TargetMuscles from './TargetMuscles'
import Equipments from './Equipments'
import CalculateBMI from './CalculateBMI'
import CalculateTDEE from './CalculateTDEE'
import ExerciseList from './ExerciseList'


function Fitness() {
  const { isLoading, sysMessage } = useAppContext()

  return (
    <>
      <Navbar />
      <Container maxWidth='xl'>
        {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
        {<Typography variant="h6" component="h6" align='left' color='red' mt={3} >{sysMessage}</Typography>}
        <Grid container mt={1}>
          <Grid item xs={12} md={3} flexWrap='wrap'>
            <BodyParts />
            <TargetMuscles />
            <Equipments />
            <CalculateBMI />
            <CalculateTDEE />
          </Grid>
          <Grid item xs={12} md={9}>
            <ExerciseList />
          </Grid>
        </Grid>

      </Container>
    </>
  )
}

export default Fitness