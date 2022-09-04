import Navbar from "../navbar/Navbar"
import Category from "../category/Category"
import SubCategory from "../subcategory/SubCategory"
import Banner from "../banner/Banner"
import Promotions from "../promotions/Promotions"
import Videos from "../videos/Videos"
import { Grid } from '@mui/material'


function Home() {
    return (
        <>
            <Navbar />
            <Category />
            <Grid container spacing={1}
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                wrap="wrap"
            >
                <Grid item xs={12} md={4}>
                    <SubCategory />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Banner />
                </Grid>
            </Grid>
            <Promotions />
            <Videos />
        </>
    )
}

export default Home