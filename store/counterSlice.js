import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    favListTest: [],
    favList:[]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    addFavtoList: (state,action) => {
        state.favListTest.push(action.payload)
    },
    addFavouriteJobs: (state,action) => {
      state.favList.push(action.payload)
    },

    removeFavouriteJobs: (state,action) => {
        state.favList = state.favList.filter((x) => x.id != action.payload)
    },

  },
})



// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addFavtoList, addFavouriteJobs, removeFavouriteJobs } = counterSlice.actions

export default counterSlice.reducer