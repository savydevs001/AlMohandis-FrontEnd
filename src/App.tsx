// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Landing Page/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/LandingPage Component/About'
import TermCondition from './components/LandingPage Component/TermCondition'
import PrivacyPolicy from './components/LandingPage Component/PrivacyPolicy'
import ServiceAggrement from './components/LandingPage Component/ServiceAggrement'
import CreateAccount from './components/LandingPage Component/CreateAccount'
import Login from './components/LandingPage Component/Login'
import Contact from './pages/Landing Page/Contact'
import PromotionContent from './pages/Landing Page/PromotionContent'
import DashBoard from './pages/Teacher Page/DashBoard'
function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/termCondition" element={<TermCondition />} />
  <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
  <Route path="/serviceAggrement" element={<ServiceAggrement />} />
  <Route path="/signup" element={<CreateAccount />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/PromotionalContent" element={<PromotionContent />} />
  <Route path="/Dashboard" element={<DashBoard />} />

</Routes>
<Footer/>
</BrowserRouter>
</>
  )
}

export default App
