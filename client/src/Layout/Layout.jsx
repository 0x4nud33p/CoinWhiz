import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Exports'
import { Footer } from '../Exports'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout