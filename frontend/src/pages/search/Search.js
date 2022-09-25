import Navbar from '../../components/navbar/Navbar'
import { Grid } from '@mui/material'


function Search() {

  return (
    <>
      <Navbar />
      <Grid container m={3}>
        <Grid item xs={12} md={12}>
          <h1>search</h1>
        </Grid>
      </Grid>
    </>
  )
}

export default Search