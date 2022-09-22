import { Grid } from '@mui/material'
import Navbar from "../../components/navbar/Navbar"


function Home() {

    return (
        <>
            <Navbar />
            <Grid container m={2} spacing={1} >
                <Grid item xs={12} md={3}>
                    home page
                </Grid>
                <Grid item xs={12} md={9}>

                </Grid>
            </Grid>

        </>
    )
}

export default Home