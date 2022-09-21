import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme/index'
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import Fitness from './pages/fitness/Fitness'
import ExerciseDetail from './pages/exerciseDetail/ExerciseDetail'
import Map from './pages/map/Map'
import Crypto from './pages/crypto/Crypto'
import CryptoDetails from './pages/crypto/cryptoDetails/CryptoDetails'
import PlayVideo from './pages/video/PlayVideo'
import Setup from './pages/setup/Setup'
import Login from './pages/auth/Login'
import Logout from './pages/auth/Logout'
import Signup from './pages/auth/Signup'
import ProtectedRoute from './pages/auth/ProtectedRoute'
import { CssBaseline } from "@mui/material"



function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.70'
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/fitness/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/video/:id" element={<PlayVideo />} />
          <Route path="/setup" element={
            <ProtectedRoute>
              <Setup />
            </ProtectedRoute>
          } />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
