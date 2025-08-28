import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import About from './pages/corporate/About'
import Privacy from './pages/corporate/Privacy'
import Terms from './pages/corporate/Terms'
import QualityPolicy from './pages/corporate/QualityPolicy'
import Faq from './pages/help/FAQ'
import ReturnsAndExchanges from './pages/help/ ReturnsAndExchanges'
import CargoTracking from './pages/help/CargoTracking'
import Contact from './pages/help/Contact'
import ScrollToTop from './components/ScrollToTop'
import ProductPage from './pages/product/ProductPage'
import ProductDetail from './pages/product/ProductDetail'

function App() {


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/products/:categorySlug" element={<ProductPage />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/corporate/about" element={<About />} />
        <Route path="/corporate/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/corporate/privacy" element={<Privacy />} />
        <Route path="/corporate/terms" element={<Terms />} />
        <Route path="/help/faq" element={<Faq />} />
        <Route path="/help/returns-exchanges" element={<ReturnsAndExchanges />} />
        <Route path="/help/cargo-tracking" element={<CargoTracking />} />
        <Route path="/help/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
