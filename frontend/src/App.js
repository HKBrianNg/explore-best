import { ThemeProvider } from '@mui/system'
import { Suspense, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme/index'
import Home from './pages/home/Home'
import News from './pages/news/News'
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
import Search from './pages/search/Search'
import { softwareVersion } from './constant'

function App() {

  useEffect(() => {
    document.title = `explore-best v${softwareVersion}`
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/info" element={<Info />} />
            <Route path="/search" element={<Search />} />
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
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
