import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Landing Page/Home';
import About from '../components/LandingPageComponent/About';
import TermCondition from '../components/LandingPageComponent/TermCondition';
import PrivacyPolicy from '../components/LandingPageComponent/PrivacyPolicy';
import ServiceAggrement from '../components/LandingPageComponent/ServiceAggrement';
import CreateAccount from '../components/LandingPageComponent/CreateAccount';
import Login from '../components/LandingPageComponent/Login';
import Contact from '../pages/Landing Page/Contact';
import PromotionContent from '../pages/Landing Page/PromotionContent';
import DashBoard from '../pages/Teacher Page/DashBoard';
import ProtectedRoute from '../components/ProtectedRoute'; // Import ProtectedRoute
import Cookies from 'js-cookie';

function LandingPageRoutes() {
  const token = Cookies.get('token');

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/termCondition" element={<TermCondition />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/serviceAggrement" element={<ServiceAggrement />} />
        <Route path="/signup" element={token ? <Navigate to="/dashboard" /> : <CreateAccount />} />
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['teacher']}><DashBoard /></ProtectedRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PromotionContent" element={<PromotionContent />} />
        
      </Routes>
    </div>
  );
}

export default LandingPageRoutes;