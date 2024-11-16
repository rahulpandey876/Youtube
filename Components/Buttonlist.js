import React from "react"
import Button from "./Button"

const Buttonlist=()=>{
    const BtnList=["All", "Gaming", "Songs", "Live", "Cricket","Cooking", "Valentines", "Bollywood Music", "Mantras", "Love Songs", "Comedy"]
    return (
        <div className="flex gap-[14px] fixed bg-gray-50">
           {BtnList.map((btn, index)=><Button key={index} Btn={btn}/>)}
        </div>
    )
}

export default Buttonlist