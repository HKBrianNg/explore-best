import { Container } from "@mui/material"
import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import Banner from "../banner/Banner"
import Promotions from "../promotions/Promotions"
import Videos from "../videos/Videos"



function Home() {
    return (
        <>
            <Container maxWidth="xl">
                <Navbar />
                <Category />
                <Banner />
                <Promotions />
                <Videos />
            </Container>
        </>
    )
}

export default Home