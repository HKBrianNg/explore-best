import { Button, Container } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { theme } from './styles/theme/index'
import Appbar from "./components/appbar"
import Banner from "./components/banner"
import Promotions from "./components/promotions"


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.1'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Appbar />
        <Banner />
        <Promotions />
      </Container>
    </ThemeProvider>
  )
}

export default App
