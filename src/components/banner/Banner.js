import { useAppContext } from '../../context/AppContext'
import { Box, Typography } from '@mui/material'
import { allCategories } from '../../constant'


function Banner() {
    const { selectedCategory } = useAppContext()

    const data = allCategories.filter((item) => (item.name === selectedCategory))


    return (
        <>
            <Box>
                <Typography variant='h6'>
                    {data[0].title}
                </Typography>
                <img src={data[0].bannericon} alt={data[0].name} style={{ width: "100%" }} />
                <Typography variant='subtitle2'>
                    {data[0].description}
                </Typography>
            </Box>
        </>
    )
}

export default Banner