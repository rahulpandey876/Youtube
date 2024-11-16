import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex space-x-6'>
       
    <div> <Sidebar/></div>
      <Outlet/>
      
    </div>
  )
}

export default Body