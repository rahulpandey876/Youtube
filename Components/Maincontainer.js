import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'


const Maincontainer = () => {

  
  return (
    <div className='space-y-24 flex justify-end   '>
       <Buttonlist />
        <VideoContainer/>
    </div>
  )
}

export default Maincontainer