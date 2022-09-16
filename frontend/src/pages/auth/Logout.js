import { useEffect } from 'react'
import { Container, Box, Paper, Typography, Button, LinearProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { useAuthContext } from '../../context/AuthContext'


function Logout() {
    const { setUser, logOut } = useAuthContext()
    const { isLoading, setIsLoading, sysMessage, setSysMessage } = useAppContext()
    const navigate = useNavigate()


    const handleClick = () => {
        navigate("/home", { replace: true })
    }

    const logout = async () => {
        try {
            setSysMessage(null)
            setIsLoading(true)
            await logOut()
            setUser(null)
        } catch (err) {
            setSysMessage(err.message)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        logout()
        // eslint-disable-next-line
    }, [])

    return (
        <Container maxWidth='lg'>
            <Box m={5} sx={{ display: 'flex', justifyContent: 'center', m: 5 }}>
                <Paper elevation={3}>
                    <Typography variant="h5" align='center' m={1} >Welcome to visit Explore-Best Website</Typography>
                    <Button variant="contained" onClick={handleClick} fullWidth disabled={isLoading}>Back to Home Page</Button>
                    {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
                    {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
                </Paper>
            </Box>
        </Container>

    )
}

export default Logout