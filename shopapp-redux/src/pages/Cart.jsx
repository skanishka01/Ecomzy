// import React from 'react'
// import {useSelector} from "react-redux"
// import { NavLink } from 'react-router-dom'
// import CartItem from '../components/CartItem'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import Modal from '../components/Modal'

// const Cart = () => {
//   const {cart} = useSelector((state)=>state);
//   const [totalAmount,setTotalAmount] = useState(0);

//   const [isModelOpen,setIsModelOpen]=useState(false);
//   const [address,setAddress] = useState('main street, 0012');
//   useEffect(() => {
//     setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
//   }, [cart]);

//   return (
//     <div >
//       {
//         cart.length >0 ? 
//         (<div className='flex max-w-5xl mx-auto justify-between m-2 p-4 mb-10'>
//             <div>
//               {
//                 cart.map((item,index)=>(
//                   <CartItem key={item.id} item={item} itemIndex={index} />
//                 ))
//               }
//             </div>

//             <div className='w-[100%] md:w-[40%] mt-5  flex flex-col'>
               
//             <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
//             <div className="flex flex-col gap-5 border-b-2 ">
//             <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
//               <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
//               <p className="text-xl">
//                 <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
//               </p>
//             </div>

//               <div className='mb-4 border-b-2 pb-2 text-lg'>
//                 <p>Shipping :</p>
//                 <p className='ml-2'>Shipping to{" "}
//                   <span className='text-sm font-bold'>{address}</span>
//                 </p>
//                 <button 
//                 className='text-blue-500 hover:underline mt-1 ml-2'
//                 onClick={setIsModelOpen(true)}
//                 >  
//                   Change address
//                   </button>
//               </div>

//             </div>
//                 <div className="flex flex-col">
//                   <p  className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
//                   <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
//                     CheckOut Now
//                   </button>
//                 </div>
//             </div>

//             <Modal
//               isModelOpen={isModelOpen}
//               setIsModelOpen={setIsModelOpen}>

//             </Modal>
//         </div>):
//         (
//           <div className='flex flex-col items-center justify-center h-screen gap-y-5 '>
//             <h1 className='text-2xl font-semibold text-blue-950 '>Cart Empty</h1>
//             <NavLink to='/blog'>
//                 <button className='text-white bg-green-500 p-3 rounded-md text-lg hover:bg-green-600 hover:scale-110 transition duration-300 ease-in'>
//                   Shop Now
//                 </button>
//             </NavLink>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default Cart

import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [address, setAddress] = useState('main street, 0012');

  const navigate=useNavigate();
  // ✅ Define state for modal visibility
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className='flex max-w-5xl mx-auto justify-between m-2 p-4 mb-10'>
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className='w-[100%] md:w-[40%] mt-5 flex flex-col'>
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
              <div className="flex flex-col gap-5 border-b-2">
                <div className="font-semibold text-xl text-green-800">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700 -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className='mb-4 border-b-2 pb-2 text-lg'>
                <p>Shipping :</p>
                <p className='ml-2'>Shipping to {" "}
                  <span className='text-sm font-bold'>{address}</span>
                </p>
                <button 
                  className='text-blue-500 hover:underline mt-1 ml-2'
                  onClick={() => setIsModelOpen(true)}  // 
                >  
                  Change address
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
              <button 
              className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"
              onClick={()=>navigate('/checkout')}
              >
                CheckOut Now
              </button>
            </div>
          </div>

          {/* ✅ Pass the state variables to Modal */}
          <Modal
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}>
              <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
          </Modal>
          
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center h-screen gap-y-5'>
          <h1 className='text-2xl font-semibold text-blue-950'>Cart Empty</h1>
          <NavLink to='/blog'>
            <button className='text-white bg-green-500 p-3 rounded-md text-lg hover:bg-green-600 hover:scale-110 transition duration-300 ease-in'>
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
