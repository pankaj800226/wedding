import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
const Home = React.lazy(() => import('./pages/Home'))
const Footer = React.lazy(() => import('./components/Footer'))
const Manage = React.lazy(() => import('./pages/Admin/Manage'))
const Upload = React.lazy(() => import('./pages/Admin/Upload'))
import Loading from "./components/Loading";

// style component
import './styles/color.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/sidebarmenu.scss'
import './styles/manage.scss'
import './styles/upload.scss'


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
                <Route path="/manage" element={<Manage />} />
                <Route path="/upload" element={<Upload />} />

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