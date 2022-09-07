import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme/index'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Map from './components/map/Map'
import PlayVideo from './components/videos/PlayVideo'
import Setup from './components/setup/Setup'
import { CssBaseline } from "@mui/material"
import { VideoContextProvider } from "./context/VideoContext"
import { AppContextProvider } from './context/AppContext'
import { MapContextProvider } from './context/MapContext'
import { SubCategoryContextProvider } from './context/SubCategoryContext'


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.31'
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <VideoContextProvider>
            <MapContextProvider>
              <SubCategoryContextProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path="/map" element={<Map />} />
                  <Route path="/video/:id" element={<PlayVideo />} />
                  <Route path="/setup" element={<Setup />} />
                </Routes>
              </SubCategoryContextProvider>
            </MapContextProvider>
          </VideoContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
