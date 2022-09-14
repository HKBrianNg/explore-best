import { Chip, Box, Stack, Typography } from '@mui/material'
import { useFitnessContext } from '../../context/FitnessContext'
import bodyImage from '../../images/body.png'
import { Colors } from '../../styles/theme'


function BodyParts() {
  const { bodyParts, selectedBodyPart, setSelectedBodyPart } = useFitnessContext()

  const handleClick = (label) => {
    setSelectedBodyPart(label)
  }

  return (
    <Box m={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Stack direction='column'>
        <Stack display='flex' direction='row' alignItems='center' justifyContent='start'>
          <img src={bodyImage} alt='bodyParts' style={{ padding: '3px', margin: '5px', width: '40px', height: '40px', borderRadius: "50%", background: Colors.dove_gray }} />
          <Typography variant='h5'>Body Parts</Typography>
        </Stack>
        <Stack direction='row' flexWrap='wrap' mt={1}>
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