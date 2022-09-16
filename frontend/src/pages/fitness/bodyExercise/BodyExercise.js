import { Grid, } from '@mui/material'
import BodyParts from './BodyParts'
import TargetMuscles from './TargetMuscles'
import Equipments from './Equipments'
import ExerciseList from './ExerciseList'
import Message from '../../../components/message/Message'


function BodyExercise() {

  return (
    <Grid container mt={1}>
      <Grid item xs={12} md={3} flexWrap='wrap'>
        <BodyParts />
        <TargetMuscles />
        <Equipments />
        <Message />
      </Grid>
      <Grid item xs={12} md={9}>
        <ExerciseList />
      </Grid>
    </Grid>
  )
}

export default BodyExercise