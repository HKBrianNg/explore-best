import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import SubCategory from "../subcategory/SubCategory"
import Banner from "../banner/Banner"
import Promotions from "../promotions/Promotions"
import Videos from "../videos/Videos"
import { Container, Grid } from '@mui/material'


function Home() {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container spacing={1}
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    wrap="wrap"
                >
                    <Grid item xs={12} md={3}>
                        <Category />
                        <SubCategory />
                        <Banner />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Videos />
                    </Grid>
                </Grid>
                <Promotions />
            </Container>
        </>
    )
}

export default Home