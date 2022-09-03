import { ThemeProvider } from '@mui/system'
import { Container, CssBaseline } from "@mui/material"
import Navbar from "../navbar/Navbar"
import Banner from "../banner/Banner"
import Promotions from "../promotions/Promotions"
import Videos from "../videos/Videos"
import { VideoContextProvider } from "../../context/VideoContext"
import { theme } from '../../styles/theme/index'


function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    <VideoContextProvider>
                        <Navbar />
                        <Banner />
                        <Promotions />
                        <Videos />
                    </VideoContextProvider>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Home