import { Button, Container } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from '@mui/system'
import { useEffect } from "react"
import Appbar from "./components/appbar"
import { theme } from './styles/theme/index'


function App() {

  useEffect(() => {
    document.title = 'explore-best'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Appbar />
        <Button variant="contained" color="secondary">test</Button>
      </Container>
    </ThemeProvider>
  )
}

export default App
