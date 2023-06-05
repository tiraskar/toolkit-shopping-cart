import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from '../redux/slices/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-3xl font-semibold py-2'>Shopping Cart</h2>
      </div>
      {cart.cartItems.length === 0 ? (
        <div className=''>
          <p>Your Cart is currently Empty.</p>
          <div className='flex space-x-5  items-center'>
            <AiOutlineArrowLeft />
            <Link to='/'>Start Shopping</Link>
          </div>
        </div>
      ) : (
        <div className=''>
          <div className='flex items-center justify-between text-2xl py-1'>
            <h3>Product</h3>
            <h3 className='ml-40'>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <hr />
          <div className=''>
            {cart.cartItems?.map((cartItem) => (
              <div
                className='flex justify-between items-center '
                key={cartItem.id}
              >
                <div className='flex'>
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className='h-32'
                  />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.desc}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className='text-center'>{cartItem.price}</div>
                <div className='flex space-x-4 '>
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <button>{cartItem.cartQuantity}</button>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className=''>{cartItem.price * cartItem.cartQuantity}</div>
              </div>
            ))}
          </div>

          <div className=' flex justify-between items-center'>
            <button className='button' onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className='button'>Check Out</button>
              <div className='flex space-x-5 items-center'>
                <AiOutlineArrowLeft />
                <Link to='/'>Continue Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
