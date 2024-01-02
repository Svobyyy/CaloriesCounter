import { configureStore } from '@reduxjs/toolkit'
import dateSlice from '../slices/dateSlice'
import findSlice from '../slices/findSlice'
import productsSlice from '../slices/productsSlice'

export const store = configureStore({
  reducer: {
    date: dateSlice,
    find: findSlice,
    products: productsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>