import { configureStore } from '@reduxjs/toolkit'
import dateSlice from '../slices/dateSlice'

export const store = configureStore({
  reducer: {
    date: dateSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})