import { Container, Grid, Box, Typography, LinearProgress } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import Navbar from '../navbar/Navbar'
import BodyParts from './BodyParts'
import TargetMuscles from './TargetMuscles'
import Equipments from './Equipments'
import CalculateBMI from './CalculateBMI'
import ExerciseList from './ExerciseList'

function Fitness() {
  const { isLoading, sysMessage } = useAppContext()

  return (
    <>
      <Navbar />
      <Container maxWidth='xl'>
        <Grid container mt={3}>
          <Grid item xs={12} md={3} flexWrap='wrap'>
            <BodyParts />
            <TargetMuscles />
            <Equipments />
            <CalculateBMI />
          </Grid>
          <Grid item xs={12} md={9}>
            <ExerciseList />
          </Grid>
        </Grid>
        {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
        {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
      </Container>
    </>
  )
}

export default Fitness