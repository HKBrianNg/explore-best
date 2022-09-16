import { Box, Stack, } from '@mui/material'
import { useFitnessContext } from "../../context/FitnessContext"


function ExerciseVideos() {
  const { exerciseVideos, } = useFitnessContext()


  return (
    <Box m={1}>
      <Stack direction='row' justifyContent='flex-start' flexWrap='wrap' alignItems='center' gap={2}>
        {exerciseVideos.map((item, index) => (
          <a key={index}
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} width="200px" height="130px" />
          </a>
        ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos