import { Grid, Container, Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar"
import watchVideoImage from "../../images/watchVideo.png"
import mapImage from "../../images/map.png"
import fitnessImage from "../../images/fitness.png"
import searchImage from "../../images/search.png"
import bitcoinImage from "../../images/bitcoin.png"
import newsImage from "../../images/news.png"
import { useTranslation } from 'react-i18next'


function Home() {
    const { t } = useTranslation()

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container m={2} spacing={2} >
                    <Grid item xs={12} md={12} display='flex' flexWrap='wrap' gap={2}>
                        <Stack direction="column" gap={1} alignItems='center'>
                            <Typography>{t("Info")}</Typography>
                            <Link to='/info'>
                                <img src={watchVideoImage} alt='' width="200px" height="150px" />
                            </Link>
                        </Stack>
                        <Stack direction="column" gap={1} alignItems='center'>
                            <Typography>{t("Fitness")}</Typography>
                            <Link to='/fitness'>
                                <img src={fitnessImage} alt='' width="200px" height="150px" />
                            </Link>
                        </Stack>
                        <Stack direction="column" gap={1} alignItems='center'>
                            <Typography>{t("Map")}</Typography>
                            <Link to='/map'>
                                <img src={mapImage} alt='' width="200px" height="150px" />
                            </Link>
                        </Stack>
                        <Stack direction="column" gap={1} alignItems='center'>
                            <Typography>{t('Search')}</Typography>
                            <Link to="/search">
                                <img src={searchImage} alt='' width="200px" height="150px" />
                            </Link>
                        </Stack>
                        <Stack direction="column" gap={1} alignItems='center'>
                            <Typography>{t("Crypto")}</Typography>
                            <Link to='/crypto'>
                                <img src={bitcoinImage} alt='' width="200px" height="150px" />
                            </Link>
                        </Stack>
                        <Stack direction="column" gap={1} alignItems='center'>
                            <Typography>{t('News')}</Typography>
                            <Link to='/news'>
                                <img src={newsImage} alt="" width="200px" height="150px" />
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home