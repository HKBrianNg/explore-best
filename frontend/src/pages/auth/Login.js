import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button";
import Navbar from '../../components/navbar/Navbar'
import { Link, Container, Box, Paper, Typography, Stack, TextField, Button, IconButton, InputAdornment, FormControl, OutlinedInput, InputLabel, LinearProgress } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppContext } from '../../context/AppContext'
import { useAuthContext } from '../../context/AuthContext'


const initialUser = {
    email: "",
    password: ""
}

function Login() {
    const [user, setUser] = useState(initialUser)
    const [showPassword, setShowPassword] = useState(false)
    const { setEmail, logIn, googleSignIn, forgetPassword } = useAuthContext()
    const { isLoading, setIsLoading, sysMessage, setSysMessage } = useAppContext()
    const navigate = useNavigate()

    const handleCancel = () => {
        setUser(initialUser)
        setSysMessage(null)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSysMessage(null)
        setIsLoading(true)
        try {
            await logIn(user.email, user.password)
            setEmail(user.email)
            navigate("/home", { replace: true })
        } catch (err) {
            setSysMessage(err.message)
        }
        setIsLoading(false)
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault()
        setSysMessage(null)
        setIsLoading(true)
        try {
            await googleSignIn()
            setSysMessage(null)
            setEmail("google")
            navigate("/home", { replace: true })
        } catch (err) {
            setSysMessage(err.message);
        }
        setIsLoading(false)
    }

    const signupHandler = () => {
        navigate("/auth/signup", { replace: true });
    }

    const forgetPasswordHandler = async () => {
        if (user.email) {
            await forgetPassword(user.email)
        }
    }


    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Box flex={1} component="form" autoComplete="off" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', m: 5 }} >
                    <Paper elevation={3}>
                        <Stack direction="column" spacing={2} m={2}>
                            <Typography variant="h5" component="h5" align='center' m={1} >Firebase Auth Login</Typography>
                            <TextField required label="Email" size='small' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    size='medium'
                                    required
                                    type={showPassword ? 'text' : 'password'}
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                size="small"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password *"
                                />
                            </FormControl>
                            <Stack direction='row' spacing={2} m={2}>
                                <Button variant="contained" type='Submit' disabled={isLoading} >Submit</Button>
                                <Button variant="contained" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                            </Stack>
                            <GoogleButton onClick={handleGoogleSignIn} />
                        </Stack>
                    </Paper>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
                    <Stack direction='row' spacing={2} m={2} >
                        <Link component="button" onClick={forgetPasswordHandler}>Forget Password?</Link>
                        <Link component="button" onClick={signupHandler}>Sign up</Link>

                        {/* <Link to='/auth/signup' align='center'>Sign up</Link> */}
                    </Stack>
                </Box>
                {isLoading && <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
                {sysMessage && <Typography variant="h6" component="h6" align='left' color='red' m={1} >{sysMessage}</Typography>}
            </Container >
        </>
    )
}

export default Login