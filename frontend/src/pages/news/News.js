import { Grid } from '@mui/material'
import Navbar from "../../components/navbar/Navbar"
import NewsCategories from './newsCategories/NewsCategories'
import NewsList from './newsList/NewsList'


function News() {

    return (
        <>
            <Navbar />
            <Grid container m={2} spacing={1} >
                <Grid item xs={12} md={3}>
                    <NewsCategories />
                </Grid>
                <Grid item xs={12} md={9}>
                    <NewsList />
                </Grid>
            </Grid>

        </>
    )
}

export default News