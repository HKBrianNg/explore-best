import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Map from './components/map/Map'
import PlayVideo from './components/videos/PlayVideo'
import { theme } from './styles/theme/index'
import { CssBaseline } from "@mui/material"
import { VideoContextProvider } from "./context/VideoContext"
import { AppContextProvider } from './context/AppContext'
import { MapContextProvider } from './context/MapContext'

function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.18'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <VideoContextProvider>
          <MapContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/video/:id" element={<PlayVideo />} />
            </Routes>
          </MapContextProvider>
        </VideoContextProvider>
      </AppContextProvider>
    </ThemeProvider>

  )
}

export default App
