import { Container } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import { theme } from './styles/theme/index'
import Navbar from "./components/navbar"
import Banner from "./components/banner"
import Promotions from "./components/promotions"
import Products from "./components/products"


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.2'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Navbar />
        <Banner />
        <Promotions />
        <Products />
      </Container>
    </ThemeProvider>
  )
}

export default App
