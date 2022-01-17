import { createSlice } from '@reduxjs/toolkit'
import Step from '../interfaces/Step'

const initialState: Step = {
  value: 0,
  title: ""
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.value = action.payload
    },
    setDescription: (state, action) => {
      state.title = action.payload
    }
  }
})

export const { setStep, setDescription } = scheduleSlice.actions
export default scheduleSlice.reducer