import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Router } from 'react-router-dom'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'

function App() {


  return (
    <>
    <Header />
    <Sobre />
    <Habilidades />
    <Footer />
    
    </>
  )
}

export default App
