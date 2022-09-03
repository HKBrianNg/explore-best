import { useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'


function App() {

  useEffect(() => {
    document.title = 'explore-best v1.0.6'
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
