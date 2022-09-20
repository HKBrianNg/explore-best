import { Grid } from '@mui/material'
import Navbar from "../../components/navbar/Navbar"
import NewsCategories from './NewsCategories/NewsCategories'
import NewsList from './NewsList/NewsList'


function Home() {

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

export default Home