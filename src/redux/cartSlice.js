
import { createSlice } from '@reduxjs/toolkit';

const initialState = [] || JSON.parse(localStorage.getItem('cart'))

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addToCart(state, action) {
        state = [...state,action]
    },
    
  },
});

export const { addToCart} = alertSlice.actions;
export default alertSlice.reducer;
