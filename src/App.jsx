import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from "./components/login";
import Home from './components/home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/gallery' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
