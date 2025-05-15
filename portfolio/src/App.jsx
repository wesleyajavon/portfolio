import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
