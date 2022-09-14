import { Box, Button, Typography } from '@mui/material'
import { useFitnessContext } from "../../context/FitnessContext"


function ExerciseSummary({ id }) {
  const { bodyExercises, getYouTubeVideoAPI } = useFitnessContext()

  const handleClick = async () => {
    await getYouTubeVideoAPI(data[0].name)
  }

  const data = bodyExercises.filter((item) => item.id === id)

  return (
    <Box m={3}>
      <Typography variant='h3'>{data[0].name}</Typography>
      <img src={data[0].gifUrl} alt={data[0].name} />
      <Button variant='contained' fullWidth onClick={handleClick}>Get Video</Button>
    </Box>
  )
}

export default ExerciseSummary