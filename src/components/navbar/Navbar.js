import { useMediaQuery, AppBar, Toolbar, IconButton, ListItemText, ListItemButton, ListItemIcon, Typography, List } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Actions from './actions'
import { Colors } from '../../styles/theme'
import { styled } from '@mui/material/styles'
import "@fontsource/montez"
import { Link } from 'react-router-dom';


const LogoTypography = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '3em',
    fontFamily: '"Montez","cursive"',
    color: Colors.secondary,
}))


const Mobile = ({ isMobile }) => {
    return (
        <>
            <IconButton sx={{ color: Colors.white }}>
                <MenuIcon />
            </IconButton>
            <LogoTypography textAlign={"center"} >
                Explore-Best
            </LogoTypography>
            <IconButton sx={{ color: Colors.white }}>
                <SearchIcon />
            </IconButton>
            <Actions isMobile={isMobile} />
        </>
    )
}

const Desktop = ({ isMobile }) => {

    return (
        <>
            <LogoTypography>
                Explore-Best
            </LogoTypography>
            <List type='row' sx={{
                display: "flex",
                flexGrow: 8,
                justifyContent: "flex-start",
                alignItems: "center",
            }}
            >
                <Link to='/' style={{ color: Colors.white, textDecoration: 'none', }}>
                    <ListItemText primary="Home" primaryTypographyProps={{ mr: 2 }} />
                </Link>
                <Link to='/map' style={{ color: Colors.white, textDecoration: 'none' }}>
                    <ListItemText primary="Map" />
                </Link>
                <ListItemButton>
                    <ListItemIcon sx={{ color: Colors.white, ml: '30px' }}>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <Actions isMobile={isMobile} />
        </>
    )
}

function Navbar() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <AppBar position="sticky" variant='dense'>
                <Toolbar>
                    {isMobile ? <Mobile isMobile={isMobile} /> : <Desktop isMobile={isMobile} />}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar