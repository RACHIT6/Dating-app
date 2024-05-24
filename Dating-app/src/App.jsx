import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/Register/Signup'
import Login from './Components/Login/login'
import Home from './Components/Home'

function App() {
  
  return (
    <>
    <Navbar Title = "Cupid-Connect"/>
    <BrowserRouter>
      <Routes>
          <Route path='/register' element = {<Signup />}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/home' element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>

    </>  
  )
}

export default App
