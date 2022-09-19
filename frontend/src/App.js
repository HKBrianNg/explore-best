import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme/index'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Fitness from './pages/fitness/Fitness'
import ExerciseDetail from './pages/exerciseDetail/ExerciseDetail'
import Map from './pages/map/Map'
import Crypto from './pages/crypto/Crypto'
import CryptoDetails from './pages/crypto/cryptoDetails/CryptoDetails'
import Exchanges from './pages/crypto/exchanges/Exchanges'
import PlayVideo from './pages/video/PlayVideo'
import Setup from './pages/setup/Setup'
import Login from './pages/auth/Login'
import Logout from './pages/auth/Logout'
import Signup from './pages/auth/Signup'
import ProtectedRoute from './pages/auth/ProtectedRoute'
import { CssBaseline } from "@mui/material"
import { VideoContextProvider } from "./context/VideoContext"
import { AppContextProvider } from './context/AppContext'
import { MapContextProvider } from './context/MapContext'
import { TopicContextProvider } from './context/TopicContext'
import { AuthContextProvider } from './context/AuthContext'
import { FitnessContextProvider } from './context/FitnessContext'


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.58'
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <AuthContextProvider>
            <VideoContextProvider>
              <MapContextProvider>
                <TopicContextProvider>
                  <FitnessContextProvider>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path='/fitness' element={<Fitness />} />
                      <Route path='/fitness/exercise/:id' element={<ExerciseDetail />} />
                      <Route path="/map" element={<Map />} />
                      <Route path="/crypto" element={<Crypto />} />
                      <Route path='/exchange' element={<Exchanges />} />
                      <Route path="/crypto/:id" element={<CryptoDetails />} />
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
                  </FitnessContextProvider>
                </TopicContextProvider>
              </MapContextProvider>
            </VideoContextProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
