import { useAppContext } from '../../context/AppContext'
import { BannerBox, StyledImg, ContentWrapperBox, TitleTypography, DescriptionTypography } from './styles'


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
    }
]

function Banner() {
    const { selectedCategory } = useAppContext()
    const data = bannerData.filter((item) => (item.category === selectedCategory))

    console.log("data:", data)

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