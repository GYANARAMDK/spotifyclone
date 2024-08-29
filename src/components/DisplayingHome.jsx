// import React from 'react'

import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import ALbumItem from "./ALbumItem";
import Songitem from "./Songitem";
export default function DisplayingHome() {
  return (
   <>
   <Navbar/>
   <div className="mb-4 ">
    <h1 className="my-5 flex flex-start font-bold text-2xl text-white">Featured Charts</h1>
    <div className="flex overflow-auto" >
          {albumsData.map((item,index)=>(<ALbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>  
   </div> 
   <div className="mb-4 ">
    <h1 className="my-5 flex flex-start font-bold text-2xl text-white">Todays biggest hits</h1>
    <div className="flex overflow-auto" >
         {songsData.map((item,index)=>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>  
   </div>   
   </>
  )
}
