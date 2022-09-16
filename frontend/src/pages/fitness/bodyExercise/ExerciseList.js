import { Stack, Box, Typography, Tooltip } from '@mui/material'
import { useFitnessContext } from '../../../context/FitnessContext'
import { Link } from 'react-router-dom'


function ExerciseList() {
  const { selectedBodyPart, selectedTargetMuscle, selectedEquipment, bodyExercises } = useFitnessContext()

  const exerciseData = bodyExercises.filter((item) => (item.bodyPart === selectedBodyPart
    && item.target === selectedTargetMuscle && item.equipment === selectedEquipment))


  return (
    <Stack display='flex' direction='row' flexWrap='wrap' gap={1}>
      {
        exerciseData.map((item) => (
          <Box key={item.id}>
            <Typography variant='h5'>{item.name}</Typography>
            <Typography variant='subtitle2'>{item.id},{item.bodyPart},{item.target},{item.equipment}</Typography>
            <Link to={`/fitness/exercise/${item.id}`}>
              <Tooltip title='Click to get Video References'>
                <img src={item.gifUrl} alt={item.name} />
              </Tooltip>
            </Link >
          </Box>
        ))
      }
    </Stack>
  )
}

export default ExerciseList