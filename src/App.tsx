import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import About from './pages/corporate/About'
import Privacy from './pages/corporate/Privacy'
import Terms from './pages/corporate/Terms'
import QualityPolicy from './pages/corporate/QualityPolicy'

function App() {


  return (

    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/corporate/about" element={<About />} />
      <Route path="/corporate/qualitypolicy" element={<QualityPolicy />} />
      <Route path="/corporate/privacy" element={<Privacy />} />
      <Route path="/corporate/terms" element={<Terms />} />
    </Routes>

  )
}

export default App
