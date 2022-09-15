import { useState } from 'react'

function CalculateTDEE() {
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [age, setAge] = useState(null)
  const [gender, setGender] = useState('female')

  const handleChange = (e) => {
    setGender(e.target.value)

  }

  return (
    <Box component='form' m={1} onSubmit={calculateBMI}>
      <Stack direction='column' gap={1}>
        <Typography variant='h5'>TDEE Calculation</Typography>
        <Stack direction='row' gap={1}>
          <TextField value={weight} required type='number' label="Weight (kg)" size='small' variant="outlined"
            onCanPlay={(e) => setWeight(e.target.value)}
            InputProps={{ inputProps: { max: 400, min: 1 } }}>
          </TextField>
          <TextField value={height} required type='number' label="Height (cm)" size='small' variant="outlined"
            onCanPlay={(e) => setHeight(e.target.value)}
            InputProps={{ inputProps: { max: 250, min: 1 } }}>
          </TextField>
        </Stack>
        <Stack direction='row' gap={1}>
          <TextField value={age} type='number' label="Age" size='small' variant="outlined"
            onCanPlay={(e) => setAge(e.target.value)}
            InputProps={{ inputProps: { max: 100, min: 1 } }}>
          </TextField>
          <Select value={gender} label="Gender" size='small' fullWidth onChange={handleChange}>
            <MenuItem value='female'>Female</MenuItem>
            <MenuItem value='male'>Male</MenuItem>
          </Select>
        </Stack>
        <Button variant='contained' fullWidth>TDEE</Button>
      </Stack>
    </Box>
  )
}

export default CalculateTDEE