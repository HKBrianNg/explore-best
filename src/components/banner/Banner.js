import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage } from './styles'


function Banner() {

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