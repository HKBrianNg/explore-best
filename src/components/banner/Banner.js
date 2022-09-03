import { BannerBox, StyledImg, ContentWrapperBox, TitleTypography, DescriptionTypography } from './styles'


function Banner() {

    return (
        <BannerBox>
            <StyledImg src="/images/banner/dog.png" />
            <ContentWrapperBox>
                <TitleTypography>
                    Awesome Exercise You Should Know
                </TitleTypography>
                <DescriptionTypography>
                    Explore the most effective exercise
                </DescriptionTypography>
            </ContentWrapperBox>
        </BannerBox>
    )
}

export default Banner