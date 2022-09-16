import { useState, useEffect } from 'react'
import { Autocomplete, Grid, TextField, Button, Stack } from '@mui/material'
import ExerciseVideos from '../../../components/exerciseVideo/ExerciseVideos'
import { useFitnessContext } from '../../../context/FitnessContext'
import { useAppContext } from '../../../context/AppContext'
import Message from '../../../components/message/Message'


function SearchVideos() {
  const { bodyExercises, getYouTubeVideoAPI } = useFitnessContext()
  const [options, setOptions] = useState([])
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const { setIsLoading, setSysMessage } = useAppContext()


  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleOnInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  }

  const handleClick = async () => {
    setIsLoading(true)
    setSysMessage("loading videos from Youtube...")
    await getYouTubeVideoAPI(value)
    setIsLoading(false)
    setSysMessage(null)
  }

  useEffect(() => {
    setIsLoading(false)
    const uniqueExerciseName = [...new Set(bodyExercises.map(item => item.name))];
    uniqueExerciseName.push("")
    setOptions(uniqueExerciseName)
    // eslint-disable-next-line
  }, [])


  return (
    <Grid container m={4}>
      <Grid item xs={12} md={3}>
        <Stack direction='column' gap={1} mt={1}>
          <Autocomplete
            size='small'
            value={value} onChange={handleOnChange}
            inputValue={inputValue} onInputChange={handleOnInputChange}
            options={options}
            renderInput={(params) => <TextField {...params} label="Exercise name" />}
          />
          <Button variant='contained' fullWidth onClick={handleClick}>Get Videos</Button>
          <Message />
        </Stack>
      </Grid>
      <Grid item xs={12} md={9}>
        <ExerciseVideos />
      </Grid>
    </Grid >
  )
}

export default SearchVideos