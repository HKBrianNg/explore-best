import { Grid, } from '@mui/material'
import BodyParts from './BodyParts'
import TargetMuscles from './TargetMuscles'
import Equipments from './Equipments'
import ExerciseList from './ExerciseList'


function BodyExercise() {

  return (
    <Grid container mt={1}>
      <Grid item xs={12} md={3} flexWrap='wrap'>
        <BodyParts />
        <TargetMuscles />
        <Equipments />
      </Grid>
      <Grid item xs={12} md={9}>
        <ExerciseList />
      </Grid>
    </Grid>
  )
}

export default BodyExercise