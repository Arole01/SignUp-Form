import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './Signup'
import { Home } from './Home'
import { AppProvider } from './Context'


const App = () => {
  return (
    <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
    </Routes>
    </BrowserRouter>
    </AppProvider>
  )
}


export default App