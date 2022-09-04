import { useAppContext } from '../../context/AppContext'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../styles/theme'

const BannerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const StyledImg = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "480px",
    [theme.breakpoints.down("md")]: {
        width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "320px",
        height: "300px",
    },
}));

const ContentWrapperBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 380,
    padding: "30px",
}))

const TitleTypography = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: "60px",
    marginBottom: "20px",
    [theme.breakpoints.down('md')]: {
        fontSize: "42px"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
    }
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    },
}));


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

    // console.log("data:", data)

    return (
        <BannerBox>
            <StyledImg src={data[0].icon} />
            <ContentWrapperBox>
                <TitleTypography>
                    {data[0].title}
                </TitleTypography>
                <DescriptionTypography>
                    {data[0].description}
                </DescriptionTypography>
            </ContentWrapperBox>
        </BannerBox>
    )
}

export default Banner