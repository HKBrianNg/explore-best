import { Chip, Box, Stack, Typography } from '@mui/material'
import { useFitnessContext } from '../../context/FitnessContext'


function BodyParts() {
  const { bodyParts, selectedBodyPart, setSelectedBodyPart } = useFitnessContext()

  const handleClick = (label) => {
    setSelectedBodyPart(label)
  }

  return (
    <Box m={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Stack direction='column'>
        <Typography variant='h5'>Body Parts</Typography>
        <Stack direction='row' flexWrap='wrap'>
          {bodyParts.map((item, id) => (
            <Chip
              key={id}
              onClick={() => handleClick(item)}
              label={item}
              variant={selectedBodyPart === item ? "filled" : "outlined"}
              sx={{ m: '1px' }}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  )

}
export default BodyParts