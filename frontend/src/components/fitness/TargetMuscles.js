import { Chip, Box, Stack, Typography } from '@mui/material'
import { useFitnessContext } from '../../context/FitnessContext'


function TargetMuscles() {
  const { bodyExercises, selectedTargetMuscle, setSelectedTargetMuscle, selectedBodyPart } = useFitnessContext()

  const handleClick = (label) => {
    setSelectedTargetMuscle(label)
  }

  const exerciseData = bodyExercises.filter((item) => (item.bodyPart === selectedBodyPart))
  const uniqueTargetMuscles = [...new Set(exerciseData.map(item => item.target))];

  return (
    <Box m={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Stack direction='column'>
        <Typography variant='h6'>Target Muscles</Typography>
        <Stack direction='row' flexWrap='wrap'>
          {uniqueTargetMuscles.map((item, id) => (
            <Chip
              key={id}
              onClick={() => handleClick(item)}
              label={item}
              variant={selectedTargetMuscle === item ? "filled" : "outlined"}
              sx={{ m: '1px' }}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  )

}
export default TargetMuscles