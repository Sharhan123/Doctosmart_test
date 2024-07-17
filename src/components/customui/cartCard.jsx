import React, { useEffect, useSyncExternalStore } from 'react'
import { useSelector } from 'react-redux'

function CartCard({data}) {

    const handleRemove = ()=>{
        let allData = JSON.parse(localStorage.getItem('cart'))
        allData.forEach((item,index) => {
            if(item._id === data._id){
                allData.splice(index,1)
            }
        });
        localStorage.setItem('cart',JSON.stringify(allData))

    }
  return (
    <div className='h-[30rem] px-3 py-3  w-[15rem] rounded-md border border-gray-300 shadow'>
    <img src={data.image} className='rounded-xl max-h-[16rem] w-full' />
    <h1 className='text-xl mt-2 font-sans font-bold'>{data.name}</h1>
    <p className='font-sans text-md '>{data.desc}</p>
    <div className='flex justify-between items-center'>
        <p className='font-sans font-bold'>₹ {data.price}/-</p>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small_2x/5-star-rating-review-star-transparent-free-png.png' className='h-16 ' />
    </div>
    <button onClick={handleRemove} className='font-sans text-lg text-white bg-red-700 w-full rounded py-2'>Remove</button>
</div>
  )
}
export default CartCard
