import { Container, Stack, Grid, Box, Typography, LinearProgress } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import { useFitnessContext } from '../../context/FitnessContext'
import Navbar from '../navbar/Navbar'
import BodyParts from './BodyParts'
import TargetMuscles from './TargetMuscles'
import Equipments from './Equipments'


function Fitness() {
  const { isLoading, sysMessage } = useAppContext()
  const { selectedBodyPart, selectedTargetMuscle, selectedEquipment, bodyExercises } = useFitnessContext()

  const exerciseData = bodyExercises.filter((item) => (item.bodyPart === selectedBodyPart
    && item.target === selectedTargetMuscle && item.equipment === selectedEquipment))

  return (
    <>
      <Navbar />
      <Container maxWidth='xl'>
        <Grid container mt={3}>
          <Grid item xs={12} md={3} flexWrap='wrap'>
            <BodyParts />
            <TargetMuscles />
            <Equipments />
          </Grid>
          <Grid item xs={12} md={9}>
            <Stack display='flex' direction='row' flexWrap='wrap' gap={2}>
              {
                exerciseData.map((item) => (
                  <Box key={item.id}>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography variant='subtitle2'>{item.bodyPart},{item.target},{item.equipment}</Typography>
                    {/* <Typography variant='subtitle1'>{item.target}</Typography> */}
                    {/* <Typography variant='subtitle1'>{item.equipment}</Typography> */}
                    <img src={item.gifUrl} alt={item.name} />
                  </Box>
                ))
              }
            </Stack>
          </Grid>
        </Grid>
        {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
        {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
      </Container>
    </>
  )
}

export default Fitness