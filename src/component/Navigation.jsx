import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Scroll from './scroll/scroll'
import Pagination from './pagination/pagination'
import Home from './home/Home'
import Navbar from './navbar/Navbar'

function Navigation() {
    
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/scroll' element={<Scroll/>}/>
        <Route path='/pagination' element={<Pagination/>}/>
    </Routes>
   </BrowserRouter>

  )
}

export default Navigation