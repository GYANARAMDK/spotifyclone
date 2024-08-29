// import React from 'react'
import { Route,Routes, useLocation } from "react-router-dom"
import DisplayingHome from "./DisplayingHome"
import DisplayALbum from "./DisplayALbum"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets";
export default function Display() {
    
    const displayRef=useRef();
    const location=useLocation();
    const isalbum=location.pathname.includes("album");
    const albumid= isalbum? location.pathname.slice(-1):"";
    const bgcolor= albumsData[Number(albumid)].bgColor;
    
    useEffect(()=>{
        if(isalbum){
            displayRef.current.style.background= `linear-gradient(${bgcolor},#121212)`
        }
        else{
              displayRef.current.style.background= `#121212`
        }
    })

    return (
    <div ref={displayRef}className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-whtie overflow-auto lg:-[75%] lg:ml-0">
       <Routes>
          <Route path='/' element ={<DisplayingHome/>}> </Route>
          <Route path='/album/:id' element ={<DisplayALbum/>}> </Route>
       </Routes>
    </div>
  )
}
