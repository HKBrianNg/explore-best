import { styled } from '@mui/material/styles'
import { Box, Typography, List } from '@mui/material'
import { Colors } from '../../styles/theme'
import "@fontsource/montez"


export const Logo = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '3em',
    fontFamily: '"Montez","cursive"',
    color: Colors.secondary,
}))

export const StyledList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}))