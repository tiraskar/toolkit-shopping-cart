import React from 'react'
import { useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../redux/slices/productApi'
import { addToCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/cart')
  }
  return (
    <div className=' '>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occured...</p>
      ) : (
        <div className='flex flex-col text-center '>
          <h2 className='text-5xl font-bold items-center pb-10'>
            New Arrivals
          </h2>
          <div className='lg:mx-60 md:mx-40 xl:flex xl:justify-center xl:space-x-10   '>
            {data?.map((product) => (
              <div
                key={product.id}
                className='border-2 rounded-lg px-20 py-10  shadow-lg '
              >
                <h2 className='text-2xl font-semibold mb-2'>{product.name}</h2>
                <img src={product.image} alt='' className='h-60' />
                <div className='flex justify-between'>
                  <span className='text-xl'>{product.desc}</span>
                  <span className='text-xl'>${product.price}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className='w-full border-2 bg-blue-500 rounded-lg py-2 text-white mt-2 text-lg'
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
