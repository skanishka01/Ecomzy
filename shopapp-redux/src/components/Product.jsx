import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { add, remove } from '../redux/Slices/CartSlice'

const Product = ({post}) => {
  const {cart} = useSelector(state => state);
  const dispatch = useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }
  const desc=post.description;
  const title=post.title;

  return (
    <div className='flex gap-y-3 sm:ml-2 md:ml-8 lg:ml-10 mt-10 flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in p-4 shadow-[inset_-12px_-8px_40px_#46464620]  rounded-xl  hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] w-[300px] h-[400px]'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
          {
          title.length > 20 ? title.substring(0,20) + ".." : title
          }</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[14px] text-left'>
          {
            desc.length > 60 ? desc.substring(0,50) + "..." : desc
          }</p>
      </div>
      <div className='h-[140px]' >
        <img className='w-full h-full object-cover' src={post.image}/>
      </div>

      <div className='flex mt-4 justify-between gap-12 items-center '>

      <div className='text-green-600 font-semibold'>
        <p>${post.price}</p>
      </div>
      {
        // cart.some((p)=>p.id === post.id)
        cart.find((p)=>p.id===post.id) ?
        (<button
         className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-2 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
         onClick={removeFromCart}>
          Remove Item
        </button>):
        (<button
          className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-2 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
         onClick={addToCart}>
          Add Item
        </button>)
      }
      </div>
    </div>
  )
}

export default Product
