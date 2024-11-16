import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen= useSelector((state)=>state.App.isMenuOpen)
    if (!isMenuOpen) return null;
    
  return (
    <div className='shadow-lg w-[170px] p-4 my-4 h-[100vh] fixed'>

    <div>
    <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
            </ul>
    </div>
        <div >
        <h1  className='font-bold pt-5'>Subscription</h1>
            <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
            </ul>
        </div>
        <div >
        <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar