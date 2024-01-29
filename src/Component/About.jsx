import React from 'react'
import Welcome1 from './Welcome1.jpg'
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LaptopIcon from '@mui/icons-material/Laptop';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function About() {
  return (
    <div className='text-center'>
      <p className='py-5 font-sans text-lg font-thin'>ABOUT ME</p>
      <p className='italic font-thin text-sm'>I love photography</p>
      <p className='p-3 px-9 text-sm font-thin'>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className='flex justify-center gap-5 p-3 m-3'>
      <div className=''>
        <div className='flex justify-center gap-3'>
        <PersonIcon/>
      <h1 className='font-semibold text-md'>My Name</h1>
        </div>
     
        <img src={Welcome1} alt=""className='h-[55vh] w-[35vw] py-8'/>
      </div>
      <div className='indent-24 w-72'> 
        <p className='text-sm font-thin '>
        Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div>
      <p>Im really good at:</p>
      <div className='mx-20 px-12'>
        <div className='flex gap-3'>
        <CameraAltIcon/>
        <p>Photography</p>
        </div>
      <p className='bg-gray-200 border-2 border-gray-900 rounded-xl'>90%</p>
{/*------------------------------2nd--------------------------------------*/}
      <div className='flex gap-3'>
        <LaptopIcon/>
        <p>Web Design</p>
        </div>
      <p className='bg-gray-200 border-2 border-gray-900 rounded-xl'>85%</p>
      {/*------------------------------3rd--------------------------------------*/}
      <div className='flex gap-3'>
        <InsertPhotoIcon/>
        <p>Photoshop</p>
        </div>
      <p className='bg-gray-200 border-2 border-gray-900 rounded-xl'>70%</p>
      </div>
    </div>
    </div>
  )
}
