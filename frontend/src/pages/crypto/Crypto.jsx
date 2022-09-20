import { useState } from 'react'
import { Grid, Box, Button } from '@mui/material'
import Navbar from '../../components/navbar/Navbar'
import Currencies from './currencies/Currencies'
import News from './news/News'

const featureList = [
  { id: "0", name: 'Currencies' },
  { id: "1", name: 'News', },
]

function Crypto() {
  const [selectedFeature, setSelectedFeature] = useState('Currencies')

  const handleClick = (name) => {
    setSelectedFeature(name)
  }


  return (
    <>
      <Navbar />
      <Grid container m={2} spacing={0.5} direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Box>
            {
              featureList.map((item) => (
                <Button
                  key={item.id}
                  variant={selectedFeature === item.name ? "contained" : "outlined"}
                  onClick={() => handleClick(item.name)}
                  sx={{ m: '2px' }}
                >
                  {item.name}
                </Button>
              ))
            }
          </Box>
        </Grid>
        {selectedFeature === 'Currencies' && <Currencies simplified={false} />}
        {selectedFeature === 'News' && <News simplified={false} />}
      </Grid>
    </>
  )
}

export default Crypto