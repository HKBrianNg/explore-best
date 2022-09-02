import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions'
import MenuIcon from '@mui/icons-material/Menu';


function AppbarMobile({ isMobile }) {
    return (
        <AppbarContainer >
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} >Explore-Best</AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions isMobile={isMobile} />
        </AppbarContainer>
    )
}

export default AppbarMobile