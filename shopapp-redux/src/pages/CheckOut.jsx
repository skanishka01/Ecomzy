import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
    const [billingToggle,setBillingToggle]=useState(true);
    const [shippingToggle,setShippingToggle]=useState(false);
    const [paymentToggle,setPaymentToggle]=useState(false);
    const [paymentMethod,setPaymentMethod]=useState("cod");

    
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
      }, [cart]);
    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                <div className="md:w-2/3">
                    <div className="border p-2 mb-6">
                        <div className="flex items-center justify-between"
                            onClick={()=>setBillingToggle(!billingToggle)}
                        >
                            <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                            {billingToggle? <FaAngleDown/>:<FaAngleUp/>}
                        </div>

                        <div className={`space-y-4 ${billingToggle ? "":"hidden"}`}>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Name</label>
                                <input type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Email</label>
                                <input type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Phone</label>
                                <input type="text"
                                    name="Phone"
                                    placeholder="Enter Phone"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                        
                        </div>
                        
                       
                        
                    </div>

                     <div className="border p-2 mb-6">
                        <div className="flex items-center justify-between"
                            onClick={()=>setShippingToggle(!shippingToggle)}
                        >
                            <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                            {shippingToggle? <FaAngleDown/>:<FaAngleUp/>}
                        </div>

                        <div className={`space-y-4 ${shippingToggle ? "":"hidden"}`}>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Address</label>
                                <input type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                            <div>
                                <label className="block text-gray-700" htmlFor="">City</label>
                                <input type="text"
                                    name="city"
                                    placeholder="Enter Email"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Zip Code</label>
                                <input type="text"
                                    name="Phone"
                                    placeholder="Enter zip"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                        
                        </div>
                        
                       
                        
                    </div>

                     <div className="border p-2 mb-6">
                        <div className="flex items-center justify-between"
                            onClick={()=>setPaymentToggle(!paymentToggle)}
                        >
                            <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
                            {paymentToggle? <FaAngleDown/>:<FaAngleUp/>}
                        </div>

                       <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                <div className="flex items-center mb-2">
                                    <input 
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "cod"}
                                        onChange={() => setPaymentMethod("cod")}
                                    />
                                    <label className="ml-2 block text-gray-700">Cash on Delivery</label>
                                </div>

                            <div className="flex items-center mb-2">
                                    <input 
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "dc"}
                                        onChange={() => setPaymentMethod("dc")}
                                    />
                                    <label className="ml-2 block text-gray-700">Debit Card</label>
                                </div>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Zip Code</label>
                                <input type="text"
                                    name="Phone"
                                    placeholder="Enter zip"
                                    className="w-full px-3 py-2 border"
                                    />
                            </div>
                        
                        </div>
                        
                       
                        
                    </div>
                </div>
                

                <div className="md:w-1/3 bg-white p-6 gap-y-11 rounded-lg shadow-md border items-center">
                    <div className="font-semibold text-5xl text-green-700 -mt-5 p-2 gap-y-5">Summary</div>
                        <p className="text-xl">
                            <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                        </p>
                        
                        <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                       
                       <button 
                        className="bg-red-600 hover:bg-red-800 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-red-600 font-bold p-3  text-xl"
                        
                        >
                        Place Order
                        </button>
              </div>

            </div>
        </div>
    );
};

export default Checkout;
