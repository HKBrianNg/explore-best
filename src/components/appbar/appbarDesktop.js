import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions'

function AppbarDesktop({ isMobile }) {

    return (
        <AppbarContainer >
            <AppbarHeader>Explore-Best</AppbarHeader>
            <MyList type='row'>
                <ListItemText primary="Home" />
                <ListItemText primary="Category" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions isMobile={isMobile} />
        </AppbarContainer>
    )
}

export default AppbarDesktop