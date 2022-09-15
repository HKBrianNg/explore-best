import { useState } from 'react'
import { Box, Stack, TextField, Button, Typography } from '@mui/material'
import { useFitnessContext } from '../../context/FitnessContext'
import { useAppContext } from '../../context/AppContext'


function CalculateBMI() {
  const [weight, setWeight] = useState(1)
  const [height, setHeight] = useState(1)
  const { isLoading, setIsLoading, setSysMessage } = useAppContext()

  const { bmiInfo, getBodyMassIndexAPI } = useFitnessContext()

  const calculateBMI = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSysMessage("calculating...")
    try {
      await getBodyMassIndexAPI({ weight: weight.toString(), height: height.toString() })
      console.log("BMI data:", bmiInfo)
      setSysMessage(null)
    } catch (error) {
      setSysMessage(error.message)
    }
    setIsLoading(false)
  }

  return (
    <Box m={1}>
      <Stack direction='column'>
        <Box component='form' m={1} autoComplete="off" onSubmit={calculateBMI}>
          <Stack direction='column' gap={1}>
            <Typography variant='h5'>BMI Calculation</Typography>
            <Stack direction='row' gap={1}>
              <TextField value={weight} required fullWidth type='number' label="Weight (kg)" size='small' variant="outlined"
                onChange={(e) => setWeight(e.target.value)}
                InputProps={{ inputProps: { max: 400, min: 1 } }}>
              </TextField>
              <TextField value={height} required fullWidth type='number' label="Height (cm)" size='small' variant="outlined"
                onChange={(e) => setHeight(e.target.value)}
                InputProps={{ inputProps: { max: 250, min: 1 } }}>
              </TextField>
            </Stack>
            <Button variant="contained" type='Submit' fullWidth disabled={isLoading}>Submit</Button>
          </Stack >
        </Box>
        <Typography variant='h6'>BMI:{bmiInfo.info.bmi}</Typography>
        <Typography variant='h6'>Healthy Range:{bmiInfo.info.healthy_bmi_range}</Typography>
        <Typography variant='h4'>{bmiInfo.info.health}</Typography>
      </Stack>
    </Box >
  )
}

export default CalculateBMI