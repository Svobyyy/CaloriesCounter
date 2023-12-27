import { createSlice } from '@reduxjs/toolkit'

export type Product = {
    __v: number,
    id: string,
    carbohydrates: number,
    fat: number,
    fiber: number,
    name: string
    protein: number
}

type initialType = {
    find: Product[]
}

const initialState: initialType = {
    find: [] 
}


const findSlice = createSlice({
    name: 'find',
    initialState,
    reducers: {
        changeFind: (state, action) => {

            state.find = action.payload
        }
    },
  })
  
  export const {changeFind} = findSlice.actions
  
  export default findSlice.reducer