import { useAppContext } from '../../context/AppContext'
import { Box, Typography } from '@mui/material'


const bannerData = [
    {
        category: "IT",
        icon: "/images/banner/dog.png",
        title: "Awesome Programming You Should Know",
        description: "Fullstack in web development - React, nodeJs, MongoDB, Firebase,...."
    },
    {
        category: "Fitness",
        icon: "/images/banner/dogAndbird.png",
        title: "Awesome Exercise You Should Know",
        description: "Explore the most effective exercise"
    },
    {
        category: "English",
        icon: "/images/banner/English.jpg",
        title: "Awesome English Lessons You Should Know",
        description: "Explore the most effective English learning"
    }
]

function Banner() {
    const { selectedCategory } = useAppContext()
    const data = bannerData.filter((item) => (item.category === selectedCategory))


    return (
        <Box>
            <Typography variant='h3'>
                {data[0].title}
            </Typography>
            <img src={data[0].icon} alt={data[0].category} style={{ width: "100%" }} />
            <Typography variant='subtitle1'>
                {data[0].description}
            </Typography>
        </Box>
    )
}

export default Banner