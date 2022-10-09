import React from 'react'
import { Footer, Navbar } from '../components'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}
export default Layout