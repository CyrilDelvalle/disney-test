import { createSlice } from '@reduxjs/toolkit'
import Show from '../interfaces/Hostel'

interface ShowState {
  value: Show[]
}

const initialState: ShowState = {
  value: []
}

export const showSlice = createSlice({
  name: 'Show',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    remove: (state, action) => {
       state.value = [...state.value.filter(elem => elem.id !== action.payload.id)]
    },
  }
})

export const { add, remove} = showSlice.actions
export default showSlice.reducer