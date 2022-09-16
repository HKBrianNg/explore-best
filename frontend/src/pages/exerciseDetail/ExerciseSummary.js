import { Box, Button, Typography } from '@mui/material'
import { useFitnessContext } from "../../context/FitnessContext"
import Message from '../../components/message/Message'
import { useAppContext } from '../../context/AppContext'


function ExerciseSummary({ id }) {
  const { bodyExercises, getYouTubeVideoAPI } = useFitnessContext()
  const { setIsLoading } = useAppContext()

  const handleClick = async () => {
    setIsLoading(true)
    await getYouTubeVideoAPI(data[0].name)
    setIsLoading(false)
  }

  const data = bodyExercises.filter((item) => item.id === id)

  return (
    <Box m={3}>
      <Typography variant='h3'>{data[0].name}</Typography>
      <img src={data[0].gifUrl} alt={data[0].name} />
      <Button variant='contained' fullWidth onClick={handleClick}>Get Video</Button>
      <Message />
    </Box>
  )
}

export default ExerciseSummary