import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './contexts/ResumeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { ToastContainer, ToastProvider } from './components/common/Toast';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import Templates from './pages/Templates';
import Features from './pages/Features';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Help from './pages/Help';
import Examples from './pages/Examples';
import CareerServices from './pages/CareerServices';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import Premium from './pages/Premium';
import NotFound from './pages/NotFound';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Account from './pages/Account';
import Roadmap from './pages/Roadmap';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/create-resume" element={<ResumeBuilder />} />
          <Route path="/features" element={<Features />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/career-services" element={<CareerServices />} />
          <Route path="/download" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/careers" element={<About />} />
          <Route path="/review" element={<Home />} />
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          
          {/* User Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/account" element={<Account />} />
          
          {/* Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

function App() {
  return (
    <ToastProvider>
      <ResumeProvider>
        <Router>
          <AppContent />
        </Router>
      </ResumeProvider>
    </ToastProvider>
  );
}

export default App;
