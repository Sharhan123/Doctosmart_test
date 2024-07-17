import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

function Card({data}) {
    const dispatch = useDispatch()
    const handleAdd = ()=>{
        const local = JSON.parse(localStorage.getItem('cart'))
        let savingData
        if(local){

             savingData = [...local,data]
        }else{
            savingData = [data]
        }
        localStorage.setItem('cart',JSON.stringify(savingData))
        dispatch(addToCart(data))
        window.alert('Item added to cart')
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
        <button onClick={handleAdd} className='font-sans text-lg text-white bg-red-700 w-full rounded py-2'>Add To Cart</button>
    </div>
  ) 
}

export default Card
