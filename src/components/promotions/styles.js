import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../styles/theme'


export const PromotionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        padding: '40px 0px 40px 0px',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    background: Colors.secondary
}))

export const MessageTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
    },
    color: Colors.white,
    fontSize: "1.5rem",
}))