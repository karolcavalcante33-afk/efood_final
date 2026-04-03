import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Perfil from './pages/perfil'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App