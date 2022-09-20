import { useState } from 'react'
import {
    InputBase, useMediaQuery, Drawer, AppBar, Button, Stack, Typography, Divider, IconButton, Toolbar,
    Box, List, ListItem, ListItemButton, ListItemText, Tooltip, LinearProgress
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Colors } from '../../styles/theme'
import "@fontsource/montez"
import { styled, useTheme, alpha } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import Actions from './actions';
// import { useFitnessContext } from '../../context/FitnessContext'
import { useAppContext } from '../../context/AppContext'
// import { useTopicContext } from '../../context/TopicContext'
// import { useVideoContext } from '../../context/VideoContext'


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
    { id: '1', name: 'Crypto', link: "/crypto" },
    { id: '2', name: 'Setup', link: "/setup" }
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
    const { isLoading, sysMessage, setSearchText } = useAppContext()
    const [search, setSearch] = useState('')

    // const [searchedExercises, setSearchedExercises] = useState([])
    // const [searchedTopics, setSearchedTopics] = useState([])
    // const [searchedVideos, setSearchedVideos] = useState([])
    // const { topics } = useTopicContext()
    // const { bodyExercises } = useFitnessContext()
    // const { videos } = useVideoContext()


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleClick = (id) => {
        navigate(navItems[id].link, { replace: true })
    }

    const handleSearchClick = () => {
        setSearchText(search)
        // const { data } = await getTopicsAPI()
        // const { data } = await getVideosAPI()
        // console.log("videos:", data)
        // if (search) {
        //     const searchResults1 = videos.filter(
        //         (video) => video.title.toLowerCase().includes(search)
        //     )
        //     const searchResults2 = bodyExercises.filter(
        //         (exercise) => exercise.name.toLowerCase().includes(search)
        //             || exercise.target.toLowerCase().includes(search)
        //             || exercise.equipment.toLowerCase().includes(search)
        //             || exercise.bodyPart.toLowerCase().includes(search)
        //     )
        //     const searchResults3 = topics.filter(
        //         (topic) => topic.name.toLowerCase().includes(search)
        //     )
        //     setSearch('')
        //     setSearchedVideos(searchResults1)
        //     setSearchedExercises(searchResults2)
        //     setSearchedTopics(searchResults3)
        //     console.log("searched video results:", searchedVideos)
        //     console.log("searched exercise results:", searchedExercises)
        //     console.log("searched topic results:", searchedTopics)
        // }
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Tooltip title="Home">
                <Logo textAlign={"center"}>
                    Explore-Best
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
                                    <Tooltip title="Home">
                                        <Logo textAlign={"center"}>
                                            Explore-Best
                                        </Logo>
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
                            <Search sx={{ display: { xs: 'none', md: 'flex' } }} >
                                <StyledInputBase
                                    placeholder="Search…"
                                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <IconButton sx={{ color: Colors.white }} onClick={handleSearchClick}>
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
                {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
                {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
            </Box>
        </>
    )
}

export default Navbar