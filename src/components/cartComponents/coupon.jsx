import React, { useState } from 'react'
import { Coupons } from '../../constants'

function Coupon() {
    const [coupon,setCoupon] = useState('')
    const [error,setError] = useState('')
    const handle = ()=>{
        if(!coupon){
            setError('Please provide a coupon')
            return
        }

        const approve = Coupons.find((item)=>coupon === item)
        if(approve){
            
        }else{
            setError('Invalid coupon eneter a valid coupon')
        }
    }
  return (
    <div className='h-20 mt-5  flex items-center justify-center gap-10 container mx-auto border'>
        <h1 className='text-xl font-medium'>Enter your coupon code if any : </h1>
        <div>

        <input onChange={(e)=>{setCoupon(e.target.value)}} type='text' className='border h-10 w-[15-rem] focus:border-orange-600 px-2 font-serif rounded border-orange-300'/>
        <p className='text-xs text-red-500'>{error}</p>
        </div>
        <button onClick={handle} className='bg-green-500 px-3 rounded text-white py-2'>
            Apply coupon 
        </button>
    </div>
  )
}

export default Coupon
