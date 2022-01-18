import { configureStore } from '@reduxjs/toolkit'
import hostelSlice from './hostelSlice'
import scheduleSlice from './scheduleSlice'
import stepSlice from './stepSlice'
import showSlice from './showSlice'

const store = configureStore({
  reducer: {
    hostel: hostelSlice,
    schedule: scheduleSlice,
    step: stepSlice,
    show: showSlice 
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store