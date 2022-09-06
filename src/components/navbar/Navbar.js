import { useState } from 'react'
import { InputBase, useMediaQuery, Drawer, AppBar, Button, Stack, Typography, Divider, IconButton, Toolbar, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Colors } from '../../styles/theme'
import "@fontsource/montez"
import { styled, useTheme, alpha } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import Actions from './actions';


const Logo = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '2em',
    fontFamily: '"Montez","cursive"',
    color: Colors.secondary,
    marginRight: '20px'
}))

const navItems = [
    { id: '0', name: 'Home', link: "/" },
    { id: '1', name: 'About', link: "/about" },
    { id: '2', name: 'Contact', link: "/contact" }
]
const drawerWidth = 240

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



function Navbar(props) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleClick = (id) => {
        navigate(navItems[id].link, { replace: true })
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Logo textAlign={"center"}>
                Explore-Best
            </Logo>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => handleClick(item.id)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    )

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <Box display='flex'>
                <AppBar component='nav'>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={0.5}
                        >
                            <Box>
                                <Link to='/' style={{ color: Colors.secondary, textDecoration: 'none', }}>
                                    <Logo textAlign={"center"}>
                                        Explore-Best
                                    </Logo>
                                </Link>
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
                                {navItems.map((item) => (
                                    <Link key={item.id} to={item.link} style={{ color: Colors.white, textDecoration: 'none', }}>
                                        <Button sx={{ color: '#fff' }}>
                                            {item.name}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                            <Search sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: Colors.white }}>
                                <SearchIcon />
                            </IconButton>
                            <Actions isMobile={isMobile} />
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ p: 3 }}>
                </Box>
            </Box>
        </>
    )
}

export default Navbar