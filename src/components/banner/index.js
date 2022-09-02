import { useMediaQuery, Typography } from '@mui/material'
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage } from '../../styles/banner'
import { useTheme } from '@mui/material/styles'


function Banner() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/dog.png" />
            <BannerContent>
                <BannerTitle variant='h5'>Awesome Exercise You Should Know</BannerTitle>
                <BannerDescription variant='subtitle'>
                    Explore the most effective exercise
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner