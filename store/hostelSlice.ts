import { createSlice } from '@reduxjs/toolkit'
import Hostel from '../interfaces/Hostel'

export interface HostelState {
  value: Hostel[]
}

const initialState: HostelState = {
  value: []
}

export const hostelSlice = createSlice({
  name: 'hostel',
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

export const { add, remove} = hostelSlice.actions
export default hostelSlice.reducer