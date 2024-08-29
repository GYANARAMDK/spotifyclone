// import React from 'react'

export default function Songitem({name,image,desc,id}) {
  return (
    <div className='min-w-[180] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1' >{name}</p>
      <p className='text-slate-200 text-sm '>{desc}</p>
    </div>
  )
}
