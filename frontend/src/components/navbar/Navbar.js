import { useState, useEffect } from 'react'
import {
    useMediaQuery, Drawer, AppBar, Button, Stack, Typography, Divider, IconButton, Toolbar,
    Box, List, ListItem, ListItemButton, ListItemText, Tooltip, LinearProgress, Select, MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Colors } from '../../styles/theme'
import "@fontsource/montez"
import { styled, useTheme, } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import Actions from './actions';
import { useAppContext } from '../../context/AppContext'
import { useAuthContext } from '../../context/AuthContext'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import homeImage from '../../images/home.png'
import { softwareVersion } from '../../constant'


const Logo = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '1.5em',
    fontFamily: '"Montez","cursive"',
    color: Colors.secondary,
    marginRight: '60px'
}))


const drawerWidth = 240

function Navbar(props) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()
    const { isLoading, sysMessage, lang, setLang } = useAppContext()
    const { t } = useTranslation(["common"])
    const { user } = useAuthContext()


    useEffect(() => {
        i18next.changeLanguage(lang)
    }, [lang])

    const navItems = [
        { id: '0', name: t('Info'), link: "/info" },
        { id: '1', name: t('Fitness'), link: "/fitness" },
        { id: '2', name: t('Map'), link: "/map" },
        { id: '3', name: t('Search'), link: "/search" },
        { id: '4', name: t('Crypto'), link: "/crypto" },
        { id: '5', name: t('News'), link: "/news" },
        { id: '6', name: t('Setup'), link: "/setup" }
    ]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleClick = (id) => {
        navigate(navItems[id].link, { replace: true })
    }


    const handleLangChange = (event) => {
        i18next.changeLanguage(event.target.value)
        setLang(event.target.value)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Tooltip title={t("Home")}>
                <Logo textAlign={"center"}>
                    {t("Explore-Best")} {softwareVersion}
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

    const handleAuth = () => {
        if (!user) {
            navigate('/auth/login', { replace: true })
        }
        else {
            navigate('/auth/logout', { replace: true })
        }
    }

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <>
            <Box display='flex'>
                <AppBar component='nav' >
                    <Toolbar sx={{ display: 'flex', justifyContent: "start", alignItems: "center" }}>
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
                                            <img src={homeImage} alt='' width="40px" height="40px" />
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
                            <Actions isMobile={isMobile} />
                        </Stack>
                        <Select size='small' sx={{ color: 'white' }}
                            value={lang}
                            label="language"
                            onChange={handleLangChange}
                        >
                            <MenuItem sx={{ width: '90px' }} value='en'>English</MenuItem>
                            <MenuItem sx={{ width: '90px' }} value='zh'>中文</MenuItem>
                        </Select>
                        {user && <Button color='inherit' onClick={handleAuth}>Logout</Button>}
                        {!user && <Button color='inherit' onClick={handleAuth}>Login</Button>}
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