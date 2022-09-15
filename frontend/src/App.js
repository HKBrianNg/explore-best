import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme/index'
import Home from './components/home/Home'
import About from './components/about/About'
import Fitness from './components/fitness/Fitness'
import ExerciseDetail from './components/exerciseDetail/ExerciseDetail'
import Map from './components/map/Map'
import PlayVideo from './components/videos/PlayVideo'
import Setup from './components/setup/Setup'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Signup from './components/auth/Signup'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { CssBaseline } from "@mui/material"
import { VideoContextProvider } from "./context/VideoContext"
import { AppContextProvider } from './context/AppContext'
import { MapContextProvider } from './context/MapContext'
import { TopicContextProvider } from './context/TopicContext'
import { AuthContextProvider } from './context/AuthContext'
import { FitnessContextProvider } from './context/FitnessContext'


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.53'
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
