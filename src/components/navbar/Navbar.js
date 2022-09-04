import { useMediaQuery, AppBar, Toolbar, IconButton, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Actions from './actions'
import { LogoTypography, MenuList } from './styles'
import { Colors } from '../../styles/theme'


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
            <MenuList type='row'>
                <ListItemText primary="Home" />
                <ListItemText primary="Category" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon sx={{ color: Colors.white }}>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MenuList>
            <Actions isMobile={isMobile} />
        </>
    )
}

function Navbar() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <AppBar position="sticky" variant='dense' disableGutters>
                <Toolbar>
                    {isMobile ? <Mobile isMobile={isMobile} /> : <Desktop isMobile={isMobile} />}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar