import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './pages/landing/Landing'
import SignUp from './pages/signup/SignUp'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Pricing from './pages/pricing/Pricing'
import Support from './pages/support/Support'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
