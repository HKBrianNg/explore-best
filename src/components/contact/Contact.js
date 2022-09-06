import Navbar from '../navbar/Navbar'
import { Container, Grid } from '@mui/material'


function Contact() {
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Grid container spacing={0.5} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} md={8}>
                        <h1>Contact List</h1>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1>Contact Form</h1>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Contact