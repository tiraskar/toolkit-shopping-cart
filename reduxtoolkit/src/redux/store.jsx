import { configureStore } from '@reduxjs/toolkit'
import productReducer, { productsFetch } from './slices/productSlice'
import { productsApi } from '../redux/slices/productApi'
import cartReducer, { getTotals } from './slices/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productsFetch())
store.dispatch(getTotals())

export default store
