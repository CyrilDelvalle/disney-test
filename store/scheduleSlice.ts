import { createSlice } from '@reduxjs/toolkit'

interface ScheduleState {
  startDate: string,
  endDate: string
}

const initialState: ScheduleState = {
  startDate: '',
  endDate: ''
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setScheduleStartDate: (state, action) => {
      state.startDate = action.payload
    },
    setScheduleEndDate: (state, action) => {
       state.endDate = action.payload
    },
  }
})

export const { setScheduleStartDate, setScheduleEndDate} = scheduleSlice.actions
export default scheduleSlice.reducer