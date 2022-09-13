import { Chip, Box, Typography, Stack } from '@mui/material'
import { useFitnessContext } from '../../context/FitnessContext'


function Equipments() {
  const { selectedEquipment, setSelectedEquipment, selectedBodyPart, selectedTargetMuscle, bodyExercises } = useFitnessContext()

  const handleClick = (label) => {
    setSelectedEquipment(label)
  }

  const exerciseData = bodyExercises.filter((item) => (item.bodyPart === selectedBodyPart && item.target === selectedTargetMuscle))
  const uniqueEquipments = [...new Set(exerciseData.map(item => item.equipment))];

  return (
    <Box m={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Stack direction='column'>
        <Typography variant='h6'>Equipments</Typography>
        <Stack direction='row' flexWrap='wrap'>
          {uniqueEquipments.map((item, id) => (
            <Chip
              key={id}
              onClick={() => handleClick(item)}
              label={item}
              variant={selectedEquipment === item ? "filled" : "outlined"}
              sx={{ m: '1px' }}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  )

}
export default Equipments