import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebLayout from './components/WebLayout'
import SplashEntry from './components/SplashEntry'
import Home from './pages/Home'
import AdvisorChat from './pages/AdvisorChat'
import FeasibilityReport from './pages/FeasibilityReport'
import LandingPage from './pages/LandingPage'
import ProfileForm from './pages/ProfileForm'

import GovtSchemes from './pages/GovtSchemes'

function App() {
  return (
    <BrowserRouter>
      <SplashEntry>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/advisor" element={<AdvisorChat />} />
            <Route path="/schemes" element={<GovtSchemes />} />
            <Route path="/reports" element={<FeasibilityReport />} />
            {/* Map /business to the assessment form */}
            <Route path="/business" element={<ProfileForm />} />
            <Route path="/profile" element={<ProfileForm />} />
          </Route>
        </Routes>
      </SplashEntry>
    </BrowserRouter>
  )
}

export default App
