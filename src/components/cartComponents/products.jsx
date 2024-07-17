import React, { useEffect } from 'react'
import { arr } from '../../constants'
import CartCard from '../customui/cartCard'
import { useSelector } from 'react-redux'

function Products() {
    const state = JSON.parse(localStorage.getItem('cart')) 
    useEffect(()=>{ 

        console.log(state);
    },[])
  return (
    <div className='flex flex-col gap-10 ml-8 mt-5 h-auto'>
        <h1 className='font-sans  text-5xl font-thin text-gray-600'>
            Cart Items
        </h1>
        <div className='h-auto grid ml-8 gap-5 grid-cols-5'>
           {
            state && state[0]?(

                state.map((items,index)=>(
                    <CartCard data={items} key={index} />
                )) 
            ):(
                <h1>No items on cart</h1>
            )
           }
        </div>
    </div>
  )
}

export default Products
