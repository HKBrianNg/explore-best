import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import PlayVideo from './components/videos/PlayVideo'
import { theme } from './styles/theme/index'
import { CssBaseline } from "@mui/material"
import { VideoContextProvider } from "./context/VideoContext"
import { AppContextProvider } from './context/AppContext'

function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.9'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <VideoContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<PlayVideo />} />
          </Routes>
        </VideoContextProvider>
      </AppContextProvider>
    </ThemeProvider>

  )
}

export default App
