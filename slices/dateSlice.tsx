import { createSlice } from '@reduxjs/toolkit'
import dayjs from "dayjs";


const initialState = {
    date: dayjs()
}


const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        test: (state) => {
            console.log(state)
        }
    },
  })
  
  export const {test} = dateSlice.actions
  
  export default dateSlice.reducer