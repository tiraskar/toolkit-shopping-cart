import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  return (
    <div className='flex justify-between items-center bg-black px-20 py-2 '>
      <Link to='/'>
        <h2 className='text-3xl text-white '>Online shopping</h2>
      </Link>

      <Link to='/cart'>
        <div className=' flex flex-row items-center'>
          <BiShoppingBag color='white' size={36} />

          <p className='bg-white px-2  rounded-full'>{cartTotalQuantity}</p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
