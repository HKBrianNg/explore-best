import { useState, useEffect } from 'react'
import { Box, FormControl, Button, Typography, Stack, Select, TextField, MenuItem, InputLabel } from '@mui/material'
import { useFitnessContext } from '../../../context/FitnessContext'
import { useAppContext } from '../../../context/AppContext'
import Message from '../../../components/message/Message'
import { useTranslation } from 'react-i18next'


const tdeeDescription = "Use this calculator to easily calculate the optimal calorie intake per day you need to keep your weight stable, or to gain or lose weight. If you are asking yourself: how many calories do I need a day, how many calories should I eat, etc. this calorie calculator is for you!"
function CalculateTDEE() {

  const [weight, setWeight] = useState(1)
  const [height, setHeight] = useState(1)
  const [age, setAge] = useState(1)
  const [gender, setGender] = useState('female')
  const [activityLevel, setActivityLevel] = useState('ma')
  const { tdeeInfo, setTdeeInfo, getTotalDailyEnergyExpenditureAPI } = useFitnessContext()
  const { isLoading, setIsLoading, setSysMessage } = useAppContext()
  const { t } = useTranslation(["common"])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { okStatus, data } = await getTotalDailyEnergyExpenditureAPI(
      {
        weight: weight.toString(),
        height: height.toString(),
        activitylevel: activityLevel,
        age: age.toString(),
        gender: gender
      }
    )
    if (okStatus) {
      setTdeeInfo(data)
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
      <Box component='form' onSubmit={handleSubmit}>
        <Stack direction='column' gap={2}>
          <Typography variant='h4'>{t('TDEE Calculator')}</Typography>
          <Typography variant='h6'>{t(tdeeDescription)}</Typography>
          <Stack direction='row' gap={1}>
            <TextField value={weight} required type='number' fullWidth label={t("Weight (kg)")} size='small' variant="outlined"
              onChange={(e) => setWeight(e.target.value)}
              InputProps={{ inputProps: { max: 400, min: 1 } }}>
            </TextField>
            <TextField value={height} required type='number' fullWidth label={t("Height (cm)")} size='small' variant="outlined"
              onChange={(e) => setHeight(e.target.value)}
              InputProps={{ inputProps: { max: 250, min: 1 } }}>
            </TextField>
          </Stack>
          <Stack direction='row' gap={1}>
            <TextField value={age} required type='number' label={t("Age")} fullWidth size='small' variant="outlined"
              onChange={(e) => setAge(e.target.value)}
              InputProps={{ inputProps: { max: 100, min: 1 } }}>
            </TextField>
            <FormControl fullWidth>
              <InputLabel required >{t("Gender")}</InputLabel>
              <Select value={gender} label={t("Gender")} size='small' fullWidth
                onChange={(e) => setGender(e.target.value)}>
                <MenuItem value='female'>{t("Female")}</MenuItem>
                <MenuItem value='male'>{t("Male")}</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <FormControl fullWidth>
            <InputLabel required >{t("Activity Level")}</InputLabel>
            <Select value={activityLevel} required label={t("Activity Level")} size='small' fullWidth
              onChange={(e) => setActivityLevel(e.target.value)}>
              <MenuItem value='se'>{t("sedentary")}</MenuItem>
              <MenuItem value='la'>{t("light active")}</MenuItem>
              <MenuItem value='ma'>{t("moderately active")}</MenuItem>
              <MenuItem value='va'>{t("very active")}</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type='Submit' fullWidth disabled={isLoading}>{t("Calculate")}</Button>
          <Message />
        </Stack>
      </Box>
      <Typography variant='h4'>{t("Total Daily Energy Expenditure (Cal)")}:{tdeeInfo.tdee.toFixed(2)}</Typography>
    </Box>
  )
}

export default CalculateTDEE