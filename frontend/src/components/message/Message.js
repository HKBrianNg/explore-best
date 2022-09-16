import { Box, Typography, LinearProgress } from '@mui/material'
import { useAppContext } from '../../context/AppContext'


function Message() {
  const { isLoading, sysMessage } = useAppContext()

  return (
    <Box m={2}>
      {isLoading && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
      {<Typography variant="h6" component="h6" align='left' color='red'>{sysMessage}</Typography>}
    </Box>
  )
}

export default Message