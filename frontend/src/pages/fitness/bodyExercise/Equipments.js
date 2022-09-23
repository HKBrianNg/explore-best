import { Chip, Box, Typography, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useFitnessContext } from '../../../context/FitnessContext'
import equipmentImage from '../../../images/equipment.png'
import { Colors } from '../../../styles/theme'


function Equipments() {
  const { selectedEquipment, setSelectedEquipment, selectedBodyPart, selectedTargetMuscle, bodyExercises } = useFitnessContext()
  const { t } = useTranslation()


  const handleClick = (label) => {
    setSelectedEquipment(label)
  }

  const exerciseData = bodyExercises.filter((item) => (item.bodyPart === selectedBodyPart && item.target === selectedTargetMuscle))
  const uniqueEquipments = [...new Set(exerciseData.map(item => item.equipment))];

  return (
    <Box m={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Stack direction='column'>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={equipmentImage} alt='targetMuscles' style={{
            padding: '3px', margin: '5px',
            width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray
          }} />
          <Typography variant='h5'>{t('Equipments')}</Typography>
        </Stack>
        <Stack direction='row' flexWrap='wrap'>
          {uniqueEquipments.map((item, id) => (
            <Chip
              key={id}
              onClick={() => handleClick(item)}
              label={t(item)}
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