import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Container, Grid } from '@mui/material'

const Sidebar = () => {
    return (
        <>
            <div>function 1</div>
            <div>function 2</div>
            <div>function 3</div>
            <div>function 4</div>
        </>
    )
}

function Setup() {
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Grid container spacing={0.5} direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} md={1}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} md={11}>
                        <h1>
                            selected function details
                        </h1>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default Setup