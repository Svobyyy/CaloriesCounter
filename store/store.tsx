import { configureStore } from '@reduxjs/toolkit'
import dateSlice from '../slices/dateSlice'
import findSlice from '../slices/findSlice'

export const store = configureStore({
  reducer: {
    date: dateSlice,
    find: findSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})