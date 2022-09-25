import { useState, useEffect } from 'react'
import {
    useMediaQuery, Drawer, AppBar, Button, Stack, Typography, Divider, IconButton, Toolbar,
    Box, List, ListItem, ListItemButton, ListItemText, Tooltip, LinearProgress, Select, MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
// import SearchIcon from '@mui/icons-material/Search'
import { Colors } from '../../styles/theme'
import "@fontsource/montez"
import { styled, useTheme, } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import Actions from './actions';
import { useAppContext } from '../../context/AppContext'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import homeImage from '../../images/home.png'

const Logo = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '2em',
    fontFamily: '"Montez","cursive"',
    color: Colors.secondary,
    marginRight: '20px'
}))

// const navItems = [
//     { id: '0', name: 'News', link: "/news" },
//     { id: '1', name: 'Crypto', link: "/crypto" },
//     { id: '2', name: 'Setup', link: "/setup" }
// ]
const drawerWidth = 240

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));



function Navbar(props) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()
    const { isLoading, sysMessage, lang, setLang } = useAppContext()
    // const [search, setSearch] = useState('')
    const { t } = useTranslation(["common"])

    useEffect(() => {
        i18next.changeLanguage(lang)
    }, [lang])

    const navItems = [
        { id: '0', name: t('News'), link: "/news" },
        { id: '1', name: t('Crypto'), link: "/crypto" },
        { id: '2', name: t('Setup'), link: "/setup" }
    ]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleClick = (id) => {
        navigate(navItems[id].link, { replace: true })
    }

    // const handleSearchClick = () => {
    //     setSearchText(search)

    // }

    const handleLangChange = (event) => {
        i18next.changeLanguage(event.target.value)
        setLang(event.target.value)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Tooltip title={t("Home")}>
                <Logo textAlign={"center"}>
                    {t("Explore-Best")}
                </Logo>
            </Tooltip>
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
                                    <Tooltip title={t("Home")}>
                                        <Box display='flex' direction='row' alignItems="center">
                                            <img src={homeImage} alt='' width="50px" height="50px" />
                                            <Logo textAlign={"center"}>
                                                {t("Explore-Best")}
                                            </Logo>
                                        </Box>
                                    </Tooltip>
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
                            {/* <Search sx={{ display: { xs: 'none', md: 'flex' } }} >
                                <StyledInputBase
                                    placeholder={t("Search")}
                                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <IconButton sx={{ color: Colors.white }} onClick={handleSearchClick}>
                                <SearchIcon />
                            </IconButton> */}
                            <Select size='small' sx={{ color: 'white' }}
                                value={lang}
                                label="language"
                                onChange={handleLangChange}
                            >
                                <MenuItem value='en'>English</MenuItem>
                                <MenuItem value='zh'>中文</MenuItem>
                            </Select>
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
                {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
                {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
            </Box>
        </>
    )
}

export default Navbar