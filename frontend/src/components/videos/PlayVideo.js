import Navbar from '../navbar/Navbar'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"
import { Container, Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import './PlayVideo.css'

const youtubeUrl = "https://www.youtube.com/watch?v="

function PlayVideo() {
    const { id } = useParams()
    const videoUrl = `${youtubeUrl}${id}`

    return (
        <>
            <Navbar />
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Link to='/'>
                        <ArrowBackIcon fontSize='large' />
                    </Link>
                    <div className='playerWrapper'>
                        <ReactPlayer className='react-player' controls={true} url={videoUrl} height="75%" width="100%" />
                    </div>
                </Box>
            </Container>
        </>
    )
}

export default PlayVideo;