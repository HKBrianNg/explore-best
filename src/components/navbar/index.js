import { useMediaQuery, AppBar, Toolbar, IconButton, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Actions from './actions'
import { Logo, StyledList } from '../../styles/navbar'
import { Colors } from '../../styles/theme'


const Mobile = ({ isMobile }) => {
    return (
        <>
            <IconButton sx={{ color: Colors.white }}>
                <MenuIcon />
            </IconButton>
            <Logo textAlign={"center"} >Explore-Best</Logo>
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
            <Logo>Explore-Best</Logo>
            <StyledList type='row'>
                <ListItemText primary="Home" />
                <ListItemText primary="Category" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon sx={{ color: Colors.white }}>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </StyledList>
            <Actions isMobile={isMobile} />
        </>
    )
}

function Navbar() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {isMobile ? <Mobile isMobile={isMobile} /> : <Desktop isMobile={isMobile} />}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar