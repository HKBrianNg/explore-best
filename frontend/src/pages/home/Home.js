import Navbar from "../../components/navbar/Navbar"
import { Container } from '@mui/material'
import Message from '../../components/message/Message'
import News from './news/News'


function Home() {

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Message />
                <News />
            </Container>
        </>
    )
}

export default Home