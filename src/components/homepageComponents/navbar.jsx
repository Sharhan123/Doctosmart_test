import React from 'react'
import Image from '../../assets/logo.png'
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='h-32 w-full flex items-center'>
      <div className='container h-5/6  mx-auto grid grid-rows-2'>
      <span className='row-span-1 flex items-center justify-between border-gray-500 border-b'>
        <img src={Image} className='h-24 w-24' />

        <div className='flex items-center gap-5'>
            <a href='/'><FindInPageIcon  className='text-gray-700' fontSize='medium'/></a>
            <a href='/cart'><ShoppingBagOutlinedIcon className='font-thin'  fontSize='medium'/></a>
            <NotificationsOutlinedIcon className='font-thin'  fontSize='medium'/>
            <FavoriteBorderOutlinedIcon className='font-thin' fontSize='medium' />
            <PermIdentityOutlinedIcon className='font-thin' fontSize='medium' />
        </div>
      </span>
      <span className='col-span-1 flex items-center justify-center gap-16 border-gray-500 border-b'>
        <h1 className='text-lg font-sans'>
            BABIES
        </h1>
        <h1 className='text-lg font-sans'>
            BOYS
        </h1>
        <h1 className='text-lg font-sans'>
            GIRLS
        </h1>
      </span>
      </div>
    </div>
  )
}
 
export default Navbar
