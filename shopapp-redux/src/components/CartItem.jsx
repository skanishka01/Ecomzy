import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item,itemIndex}) => {
  const dispatchEvent = useDispatch();

  const removeFromCart = ()=>{
    dispatchEvent(remove(item.id));
    toast.success('Item Removed from Cart');
  }
  const desc = item.description;
  return (
    <div className='flex justify-between gap-4 p-4 m-2 border-b-2 w-[500px]'>
      <div>
        <img className='w-[150px]' src={item.image} alt={item.title}/>
      </div>
      <div className='flex flex-col gap-3 '>
        <h1 className='font-semibold'>{item.title}</h1>
        <h1 className='text-sm'>
          {
            desc.length > 50 ? desc.substring(0,50) + "..." : desc
          }</h1>
        <div className='flex justify-between items-center mr-4'>
          <p className='font-semibold text-green-600'>${item.price}</p>
          
          <button
           className='text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'
            onClick={removeFromCart}>
            <AiFillDelete/>
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default CartItem
