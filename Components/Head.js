import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './Appslice'
import { Youtube_search_API } from './Constants'

const Head = () => {
    const dispatch=useDispatch()
    const [Search, setSearch]= useState("")
    const [Suggestions, setSuggestions]= useState([])
    const [Showsuggestions, setShowsuggestions]= useState(false)
    useEffect(()=>{
       
      const Timer= setTimeout(()=>getSearchValue() , 2000)
      return ()=>{
        clearTimeout(Timer)
      }
    },[Search])
    const getSearchValue= async ()=>{
        const data= await fetch(Youtube_search_API + Search)
        const json= await data.json()
        //console.log(json)
        setSuggestions(json[1])
    }
    console.log(Suggestions)

    const toggleMenuhandler=()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className='flex justify-between '>
        <div className='flex'>
            <img className='h-12' onClick={toggleMenuhandler} alt='menu' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" />
            <img className='h-12' alt="Logo" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"  />
        </div>
        <div className=' '>
            <input value={Search} onChange={(e)=>setSearch(e.target.value)} onFocus={()=> setShowsuggestions(true)} onBlur={()=> setShowsuggestions(false)} placeholder='Search' type="text" className='border-[1px] border-gray-500 w-[32rem] rounded-l-full p-2' />
            <button className='border-[1px] border-gray-400 rounded-r-full p-2 bg-gray-100'>Search</button>
           {Showsuggestions && <div className=''>
               <ul className='space-y-2 fixed bg-gray-50 w-[500px] py-3 px-6  p-5 m-3 shadow-lg  z-20 top-[50px] rounded-lg'>
                {Suggestions.map((s, index)=>{
                    return <li key={index}>🔍{s}</li>
                })}
                 
               </ul>
            </div>}
        </div>
        <div className=''>
            <img className='h-12' alt="user"  src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"/>
        </div>
    </div>
  )
}

export default Head