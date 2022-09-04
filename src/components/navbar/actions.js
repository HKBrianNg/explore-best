
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { ListItemButton, ListItemIcon, Divider } from '@mui/material'
import { Colors } from '../../styles/theme'
import { styled } from '@mui/material/styles'
import { Box, List } from '@mui/material'


const MenuList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));

const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))

const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}))


function Actions({ isMobile }) {
    const Component = isMobile ? ActionIconsContainerMobile : ActionIconsContainerDesktop

    return (
        <Component>
            <MenuList type='row'>
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
            </MenuList>
        </Component>
    )

}

export default Actions