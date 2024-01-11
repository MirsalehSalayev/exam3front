import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../sections/Navbar'
import Footer from '../../sections/Footer'
function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout