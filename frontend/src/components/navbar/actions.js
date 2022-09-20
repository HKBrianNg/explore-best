// import SettingsIcon from '@mui/icons-material/Settings';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person'
import FitbitIcon from '@mui/icons-material/Fitbit';
import { ListItemButton, ListItemIcon, Divider, Avatar, Tooltip } from '@mui/material'
import { Colors } from '../../styles/theme'
import { styled } from '@mui/material/styles'
import { Box, List } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

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
    const navigate = useNavigate()
    const { user } = useAuthContext()


    const handleAuth = () => {
        if (!user) {
            navigate('/auth/login', { replace: true })
        }
        else {
            navigate('/auth/logout', { replace: true })
        }
    }

    return (
        <Component>
            <MenuList type='row'>
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            color: Colors.white,
                        }}>
                        <Link to='/fitness' style={{ color: Colors.white, textDecoration: 'none', }}>
                            <Tooltip title="Fitness">
                                <FitbitIcon />
                            </Tooltip>
                        </Link>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            color: Colors.white,
                        }}>
                        <Link to='/map' style={{ color: Colors.white, textDecoration: 'none', }}>
                            <Tooltip title="Google Map">
                                <MapIcon />
                            </Tooltip>
                        </Link>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex', justifyContent: 'center',
                            color: Colors.white,
                        }}>
                        <Link to='/info' style={{ color: Colors.white, textDecoration: 'none', }}>
                            <Tooltip title="Videos">
                                <OndemandVideoIcon />
                            </Tooltip>
                        </Link>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                {user ?
                    <ListItemButton sx={{ justifyContent: 'center' }} onClick={handleAuth}>
                        <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: Colors.white, }}>
                            <Tooltip title="Logout">
                                <Avatar>{user.email.substring(0, 1)}</Avatar>
                            </Tooltip>
                        </ListItemIcon>
                    </ListItemButton>
                    :
                    <ListItemButton sx={{ justifyContent: 'center' }} onClick={handleAuth}>
                        <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: Colors.white, }}>
                            <Tooltip title="Login">
                                <PersonIcon />
                            </Tooltip>
                        </ListItemIcon>
                    </ListItemButton>
                }
                <Divider orientation="vertical" flexItem />
            </MenuList>
        </Component >
    )

}

export default Actions