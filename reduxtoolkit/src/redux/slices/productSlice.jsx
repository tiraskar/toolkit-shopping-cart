import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  items: [],
  status: null,
}

//action creators
export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`)
      return response?.data
    } catch (error) {
      console.log(error)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,

  //reducers generate action creators and handle state for action creators
  reducers: {},

  //extra reducers handle actions type
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = 'pending'
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.items = action.payload
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected'
    },
  },
})

export default productSlice.reducer
