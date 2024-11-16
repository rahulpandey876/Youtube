import React, { useContext, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "./Appslice";
import { useParams } from "react-router-dom";
import { InfoContext } from "./ReactContext"
const Watch=()=>{
    const VideoInfo= useContext(InfoContext)
    const [IsExpanded, setIsExpanded]= useState(false)
    const toggleExpand=()=>{
      setIsExpanded(!IsExpanded)
    }
    
   
    const {videoId}= useParams()
   
    const dispatch= useDispatch()
     useEffect(()=>{
        dispatch(CloseMenu())
     },[])
     const videoDetails = VideoInfo.find((video) => video.id === videoId);
     const description= videoDetails?.snippet?.description
     const text= description?.length>100? description.substring(0,100)+'...':description
   
    return(
       <div className="flex flex-col border-2 border-black w-[900px] p-4 m-4 rounded-3xl">
         <div className="">
            <iframe  className="rounded-lg" width="800" height="400" 
       src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe></div>
        <div className="">
        <h1 className="text-xl font-semibold">{videoDetails?.snippet?.title}</h1>
        <p>{IsExpanded?description:text }</p>
        <button className="text-blue-600" onClick={toggleExpand} >{IsExpanded? "Show less": "show more"}</button>
        </div>
       </div>
    )
}
export default Watch