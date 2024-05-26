import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./components/Login'))
const Contact = React.lazy(() => import('./components/Contact'))
const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const Footer = React.lazy(() => import('./components/Footer'))
const DashBoard = React.lazy(() => import('./pages/DashBoard'))
const Manage = React.lazy(() => import('./pages/Admin/Manage'))
const Feedback = React.lazy(() => import('./pages/Admin/Feedback'))



import Loading from "./components/Loading";

// style component
import './styles/color.scss'
import './styles/home.scss'
import './styles/header.scss'
import './styles/banner.scss'
import './styles/contact.scss'
import './styles/aboutUs.scss'
import './styles/footer.scss'
import './styles/sidebarmenu.scss'
import './styles/manage.scss'
import './styles/feedback.scss'






const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          {
            loading ? (
              <Loading />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            )
          }
          <Toaster />
        </Suspense>
        <Footer />
      </Router>
    </div>
  )
}

export default App