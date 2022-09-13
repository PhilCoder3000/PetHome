import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HomeSlice {
  value: number
}

const initialState: HomeSlice = {
  value: 0,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = homeSlice.actions

export const homeReducer = homeSlice.reducer