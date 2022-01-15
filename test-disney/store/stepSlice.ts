import { createSlice } from '@reduxjs/toolkit'

interface State {
  value: number
}

const initialState: State = {
  value: 0
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setStep } = scheduleSlice.actions
export default scheduleSlice.reducer