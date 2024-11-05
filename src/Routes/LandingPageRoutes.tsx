import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Landing Page/Home';
import About from '../components/LandingPage Component/About';
import TermCondition from '../components/LandingPage Component/TermCondition';
import PrivacyPolicy from '../components/LandingPage Component/PrivacyPolicy';
import ServiceAggrement from '../components/LandingPage Component/ServiceAggrement';
import CreateAccount from '../components/LandingPage Component/CreateAccount';
import Login from '../components/LandingPage Component/Login';
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