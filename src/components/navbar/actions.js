
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { ListItemButton, ListItemIcon, Divider } from '@mui/material'
import { StyledList } from './styles'
import { ActionIconsContainerMobile, ActionIconsContainerDesktop } from './styles'
import { Colors } from '../../styles/theme'


function Actions({ isMobile }) {
    const Component = isMobile ? ActionIconsContainerMobile : ActionIconsContainerDesktop

    return (
        <Component>
            <StyledList type='row'>
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            color: Colors.white,
                        }}>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            color: Colors.white,
                        }}>
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            color: Colors.white,
                        }}>
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </StyledList>
        </Component>
    )

}

export default Actions