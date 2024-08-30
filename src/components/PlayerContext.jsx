import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext=createContext();
 const PlayerContextProvider=({children})=>{
    const audioRef=useRef();
    const seekBg=useRef()
    const seekBar=useRef()
    const [track,settrack]=useState(songsData[0])
    const [playstatus,setplaystatus]=useState(false)
    const [time,settime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const play=()=>{
        audioRef.current.play();
        setplaystatus(true)
    }
    const pause=()=>{
        audioRef.current.pause();
        setplaystatus(false)
    }
    const playwithId=async(id)=>{
           await settrack(songsData[id]);
           await audioRef.current.play();
           setplaystatus(true);
    }
    useEffect(()=>{

      setTimeout(() => {
         seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
         audioRef.current.ontimeupdate=()=>{
            settime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }
            })
         }
      }, 1000);
    },[audioRef])
    const contextvalue={
       audioRef,
       seekBg,
       seekBar,
       track,settrack,
       playstatus,setplaystatus,
       time,settime,
       play,
       pause,
       playwithId
    }
    return (
        <PlayerContext.Provider value={contextvalue}>
                {children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;