import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme/index'
import Home from './components/home/Home'
import About from './components/about/About'
import Map from './components/map/Map'
import PlayVideo from './components/videos/PlayVideo'
import VideoSetup from './components/setup/VideoSetup'
import Setup from './components/setup/Setup'
import { CssBaseline } from "@mui/material"
import { VideoContextProvider } from "./context/VideoContext"
import { AppContextProvider } from './context/AppContext'
import { MapContextProvider } from './context/MapContext'


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.21'
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <VideoContextProvider>
            <MapContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/map" element={<Map />} />
                <Route path="/video/:id" element={<PlayVideo />} />
                <Route path="/video/add/:id" element={<VideoSetup />} />
                <Route path="/setup" element={<Setup />} />
              </Routes>
            </MapContextProvider>
          </VideoContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
