import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../styles/theme'


export const BannerBox = styled(Box)(({ theme }) => ({
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

export const StyledImg = styled("img")(({ src, theme }) => ({
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

export const ContentWrapperBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 380,
    padding: "30px",
}))

export const TitleTypography = styled(Typography)(({ theme }) => ({
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

export const DescriptionTypography = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    },
}));

