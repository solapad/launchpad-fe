import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Projects from './pages/Projects'
import Staking from './pages/Staking'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/projects" element={<Projects />} />
      <Route path="/staking" element={<Staking />} />
    </Routes>
  )
}

export default App
