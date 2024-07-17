import React, { useEffect, useState } from 'react'

function Checkout() {
    const [count,setCount] = useState(0)
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('cart'))
        setCount(data.length)
        const total = data.reduce((item,accum)=>{
           return item += accum.price
        },0)
        setTotal(total)
    },[])
  return (  
    <div className='mt-5 grid grid-rows-2 py-2 container mx-auto mb-5 h-32 border-t border-black border-b '>
      <span className='row-span-1 flex justify-evenly items-center'>
      <h1 className='font-sans text-xl font-bold'>Total Products : {count}</h1>
      <h1 className='font-sans text-xl font-bold'>Total Amount : {total}</h1>
      </span>
      <span className='flex items-center'>
        <button className='w-full text-center bg-blue-600 text-lg text-white py-3 rounded'>
            check out
        </button>
      </span>
    </div>
  )
}

export default Checkout
