import { useState, useEffect } from 'react'
import { Box, Stack, TextField, Button, Typography } from '@mui/material'
import { useFitnessContext } from '../../../context/FitnessContext'
import { useAppContext } from '../../../context/AppContext'
import Message from '../../../components/message/Message'


function CalculateBMI() {
  const [weight, setWeight] = useState(1)
  const [height, setHeight] = useState(1)
  const { isLoading, setIsLoading, setSysMessage } = useAppContext()

  const { bmiInfo, setBmiInfo, getBodyMassIndexAPI } = useFitnessContext()

  const calculateBMI = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { okStatus, data } = await getBodyMassIndexAPI({ weight: weight.toString(), height: height.toString() })
    if (okStatus) {
      setBmiInfo(data)
      setSysMessage(null)
    } else {
      setSysMessage(data)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(false)
    // eslint-disable-next-line
  }, [])

  return (
    <Box m={4} maxWidth={500}>
      <Stack direction='column'>
        <Box component='form' autoComplete="off" onSubmit={calculateBMI}>
          <Stack direction='column' gap={1}>
            <Typography variant='h4'>BMI Calculator</Typography>
            <Typography variant='h6'>Use this online BMI calculator to easily calculate your Body Mass Index (BMI).
              It also shows your BMI category, as well as the BMI Prime index and how much overweight or underweight you are compared to the optimal weight range.
              The calculator works for adult men and women and may be unsuitable for children and teenagers.
            </Typography>
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
            <Button variant="contained" type='Submit' fullWidth disabled={isLoading}>Calculate</Button>
            <Message />
          </Stack>
        </Box>
        <Typography variant='h6'>BMI:{bmiInfo.bmi}</Typography>
        <Typography variant='h6'>Healthy Range:{bmiInfo.healthy_bmi_range}</Typography>
        <Typography variant='h4'>{bmiInfo.health}</Typography>
      </Stack>
    </Box>
  )
}

export default CalculateBMI