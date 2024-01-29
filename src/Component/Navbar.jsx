import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
export default function Navbar() {
  return (
    <div className='flex justify-between p-2 rounded-2xl bg-slate-200 '>
        <div className='flex gap-4 font-thin'>
        <IconButton>
        <HouseIcon/>
      </IconButton>

      <IconButton>
        <PersonIcon/>
      </IconButton>
      
      <IconButton>
        <PhoneEnabledIcon/>
      </IconButton>

      <IconButton>
        <ViewCompactIcon/>
      </IconButton>

        </div>
      <div>
      <IconButton>
        <SearchIcon/>
      </IconButton>
      </div>
      
    </div>
  )
}
