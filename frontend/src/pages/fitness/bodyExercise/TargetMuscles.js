import { Chip, Box, Stack, Typography } from '@mui/material'
import { useFitnessContext } from '../../../context/FitnessContext'
import muscleImage from '../../../images/muscles.png'
import { Colors } from '../../../styles/theme'


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
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={muscleImage} alt='targetMuscles' style={{
            padding: '3px', margin: '5px',
            width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray
          }} />
          <Typography variant='h5'>Target Muscles</Typography>
        </Stack>
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