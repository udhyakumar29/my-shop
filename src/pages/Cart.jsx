// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import Emptycart from "../assets/Images/emty.jpg";
// import { FaTrashAlt } from 'react-icons/fa';


// const Cart = () => {
//     const cart = useSelector(state => state.cart);
//     const [address, setAddress] = useState ('main stret, 0012')

//   return (
//     <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
//         {cart.products.length > 0 ?
//         <div>
//             <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
//             <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
//                 <div className='md:w-2/3' >
//                     <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
//                         <p>PRODUCTS</p>
//                         <div className='flex space-x-8 '>
//                             <p>PRICE</p>
//                             <p>QUANTITY</p>
//                             <p>SUBTOTAL</p>
//                             <p>REMOVE</p>
                            
//                         </div>
//                     </div>
//                     <div>
//                         {cart.products.map((product) => (
//                             <div 
//                             key={product.id}
//                             className='flex items-center justify-between p-3 border-b'
//                             >
//                                 <div className='md:flex items-center space-x-4'>
//                                     <img 
//                                     src={product.image}
//                                      alt={product.name} 
//                                      className='w-16 h-16 object-contain rounded'
//                                      />
//                                     <div className='flex-1 ml-4'>
//                                         <h3 className='text-lg font-semibold'>{product.name}</h3>
//                                     </div>
//                                 </div>
//                                 <div className='flex space-x-12 items-center'>
//                                     <p>${product.price}</p>
//                                     <div className='flex items-center justify-center border'>
//                                         <button 
//                                         className='text-xl fint-bold px-1.5 border-r'
//                                         >
//                                             -
//                                             </button>
//                                         <p className='text-xl px-2'>{product.quantity}</p>
//                                         <button className='text-xl px-2 border-1'>+</button>
//                                     </div>
//                                     <p>${(product.quantity * product.price).toFixed(2)}</p>
//                                     <button className='text-red-500 hover:text-red-700'>
//                                         <FaTrashAlt />
//                                     </button>
//                                 </div>
//                             </div>

//                         ))};
//                     </div>

//                 </div>
                         
//                 <div className='md:w-1/3  bg-white p-6 rounded-lg shadow-md border'>
//                     <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
//                     <div className='flex justify-between mb-5 border-b pb-1'>
//                         <span className='text-sm'>Total Items:</span>
//                         <span>{cart.totalQuantity}</span> 
//                     </div>
//                         <div className='mb-4 border-b pb-2'>
//                             <p>Shipping</p>
//                             <p className='ml-2'>
//                                 Shipping to{" "}
//                                 <span className='text-xs font-bold'>{address}</span>
//                                 </p>
//                             <button 
//                             className='text-blue-500 hover:underline mt-1 ml-2'
//                             >
//                                 change address
//                                 </button>
//                         </div>
//                         <div className='flex justify-between mb-4'>
//                             <span>Total Price</span>
//                             <span>${cart.totalPrice.toFixed((2))}</span>
//                         </div>
//                         <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'
//                         >
//                             Proced to checkout
//                         </button>
//                 </div>
//                 </div>
//             </div>
        
//         :  <div className='flex justify-center'>
//             <img src={Emptycart} alt=""  className='h-96'/>
//         </div> }
//     </div>
//   )
// }

// export default Cart

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Emptycart from '../assets/Images/emty.jpg';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { Navigate, useNavigate } from 'react-router-dom';




const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState('main street, 0012')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='container mx-auto py-8 px-4'>
      {cart.products.length > 0 ? (
        <div>
          <h3 className='text-xl md:text-2xl font-semibold mb-4'>SHOPPING CART</h3>

          <div className='flex flex-col md:flex-row gap-6'>
            {/* Product List */}
            <div className='w-full md:w-2/3'>
              {/* Header for desktop only */}
              <div className='hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold'>
                <p className='w-1/3'>PRODUCTS</p>
                <div className='flex justify-between w-2/3'>
                  <p className='w-1/4'>PRICE</p>
                  <p className='w-1/4'>QUANTITY</p>
                  <p className='w-1/4'>SUBTOTAL</p>
                  <p className='w-1/4'>REMOVE</p>
                </div>
              </div>

              {/* Product Items */}
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className='flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b gap-4 md:gap-0'
                >
                  {/* Image and Name */}
                  <div className='flex items-center w-full md:w-1/3'>
                    <img
                      src={product.image}
                      alt={product.name || 'Product image'}
                      className='w-16 h-16 object-contain rounded mr-4'
                    />
                    <h3 className='text-sm font-semibold'>{product.name}</h3>
                  </div>

                  {/* Product Info */}
                  <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm w-full md:w-2/3'>
                    <div>
                      <p className='font-semibold md:hidden'>Price:</p>
                      <p>${product.price}</p>
                    </div>

                    <div>
                      <p className='font-semibold md:hidden'>Quantity:</p>
                      <div className='flex items-center border w-fit px-2 rounded'>
                        <button className='text-lg px-2 border-r hover:bg-gray-100'
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        >-
                        </button>
                        <p className='px-2'>{product.quantity}</p>
                        <button className='text-lg px-2 border-l hover:bg-gray-100'
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        >+
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className='font-semibold md:hidden'>Subtotal:</p>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                    </div>

                    <div>
                      <p className='font-semibold md:hidden'>Remove:</p>
                      <button
                             className='text-red-500 hover:text-red-700 cursor-pointer'
                                onClick={() => dispatch(removeFromCart(product.id))}
                        >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Total Section */}
            <div className='w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
              <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
              <div className='flex justify-between mb-4 border-b pb-1 text-sm'>
                <span>Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className='mb-4 border-b pb-2 text-sm'>
                <p>Shipping</p>
                <p className='ml-2'>
                  Shipping to <span className='font-bold'>{address}</span>
                </p>
                <button
                  className='text-blue-500 hover:underline mt-1 ml-2'
                  onClick={() => setIsModalOpen(true)}
                >
                  Change address
                </button>
              </div>

              <div className='flex justify-between mb-4 text-sm'>
                <span>Total Price</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800 text-sm'
              onClick={() => navigate('/checkout')}
              >
                Proceed to checkout
              </button>
            </div>
          </div>

          {/* Address Change Modal */}
          <Modal isModelOpen={isModalOpen} 
          setIsModelOpen={setIsModalOpen}>
            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
          </Modal>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <img src={Emptycart} alt="Empty Cart" className='h-72 md:h-96 object-contain' />
          <p className='mt-4 text-gray-500 text-center'>Your cart is empty. Start shopping now!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
