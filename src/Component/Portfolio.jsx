import React from 'react'
import work1 from './work1.jpg'
import work2 from './work2.jpg'
import work3 from './work3.jpg'
import work4 from './work4.jpg'
import work5 from './work5.jpg'
import work6 from './work6.jpg'
import work7 from './work7.jpg'
import work8 from './work8.jpg'


export default function Portfolio() {
  return (
    <div className='text-center'>
      <h1 className='font-semibold text-2xl text-gray-500 my-8'>MY WORK</h1>
      <p className='text-gray-500 text-sm italic'>Here are some of my latest lorem work ipsum tipsum.</p>
      <p className='text-gray-500 text-sm italic'>Click on the images to make them bigger</p>
    <div className='flex justify-center my-5 gap-4'>
        <img src={work1} alt="" className='h-[25vh] w-[20vw]'/>
        <img src={work2} alt="" className='h-[25vh] w-[20vw]'/>
        <img src={work3} alt="" className='h-[25vh] w-[20vw]'/>
        <img src={work4} alt="" className='h-[25vh] w-[20vw]'/>
    </div>
    <div className='flex justify-center gap-4'>
        <img src={work5} alt="" className='h-[25vh] w-[20vw]'/>
        <img src={work6} alt="" className='h-[25vh] w-[20vw]'/>
        <img src={work7} alt="" className='h-[25vh] w-[20vw]'/>
        <img src={work8} alt="" className='h-[25vh] w-[20vw]'/>
    </div>
    </div>
  )
}
