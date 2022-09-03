import { ThemeProvider } from '@mui/system'
import { Container, CssBaseline } from "@mui/material"
import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import Banner from "../banner/Banner"
import Promotions from "../promotions/Promotions"
import Videos from "../videos/Videos"
import { VideoContextProvider } from "../../context/VideoContext"
import { theme } from '../../styles/theme/index'
import { AppContextProvider } from '../../context/AppContext'


function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    <AppContextProvider>
                        <VideoContextProvider>
                            <Navbar />
                            <Category />
                            <Banner />
                            <Promotions />
                            <Videos />
                        </VideoContextProvider>
                    </AppContextProvider>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Home