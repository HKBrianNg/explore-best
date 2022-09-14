import { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import ExerciseVideos from './ExerciseVideos'
import SimilarExercise from './SimilarExercise'
import ExerciseSummary from './ExerciseSummary'
import Navbar from '../navbar/Navbar'


function ExerciseDetail() {
  const { id } = useParams()

  useEffect(() => {

  }, [])


  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12} md={3}>
          <ExerciseSummary id={id} />
        </Grid>
        <Grid item xs={12} md={9}>
          <ExerciseVideos id={id} />
        </Grid>
      </Grid>
    </>
  )
}

export default ExerciseDetail