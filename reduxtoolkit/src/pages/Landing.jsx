import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-20 py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Landing
