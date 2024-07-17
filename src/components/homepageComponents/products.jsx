import React from 'react'
import Card from '../customui/card'
import { arr } from '../../constants'

function Products() {
  return (
    <div className='flex flex-col gap-10 ml-8 mt-5 h-auto'>
        <h1 className='font-sans  text-5xl font-thin text-gray-600'>
            Our Top Categories
        </h1>
        <div className='h-auto grid ml-8 gap-5 grid-cols-5'>
           {
            arr.map((items,index)=>(
                <Card data={items} key={index} />
            ))
           }
        </div>
    </div>
  )
}

export default Products
