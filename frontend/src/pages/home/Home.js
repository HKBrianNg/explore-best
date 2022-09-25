import { Grid, Container, Tooltip } from '@mui/material'
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
                    <Grid item xs={12} md={12} display='flex' flexWrap='wrap'>
                        <Tooltip title={t("Watch Video")}>
                            <Link to='/info'>
                                <img src={watchVideoImage} alt='' width="200px" height="150px" style={{ marginRight: '3px' }} />
                            </Link>
                        </Tooltip>
                        <Tooltip title={t("View Map")}>
                            <Link to='/map'>
                                <img src={mapImage} alt='' width="200px" height="150px" style={{ marginRight: '3px' }} />
                            </Link>
                        </Tooltip>
                        <Tooltip title={t("Fitness")}>
                            <Link to='/fitness'>
                                <img src={fitnessImage} alt='' width="200px" height="150px" style={{ marginRight: '3px' }} />
                            </Link>
                        </Tooltip>
                        <Tooltip title={t('search')}>
                            <Link to="/search">
                                <img src={searchImage} alt='' width="200px" height="150px" style={{ marginRight: '3px' }} />
                            </Link>
                        </Tooltip>
                        <Tooltip title={t("Crypto")}>
                            <Link to='/crypto'>
                                <img src={bitcoinImage} alt='' width="200px" height="150px" style={{ marginRight: '3px' }} />
                            </Link>
                        </Tooltip>
                        <Tooltip title={t('News')}>
                            <Link to='/news'>
                                <img src={newsImage} alt="" width="200px" height="150px" style={{ mr: '2px' }} />
                            </Link>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home