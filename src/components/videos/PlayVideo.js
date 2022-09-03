import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"
import { Container } from '@mui/material'
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
            <Link to='/'>
                <ArrowBackIcon fontSize='large' />
            </Link>
            <Container maxWidth="lg">
                <div className='playerWrapper'>
                    <ReactPlayer className='react-player' controls={true} url={videoUrl} height="75%" width="100%" />
                </div>
            </Container>
        </>
    )
}

export default PlayVideo;