import { createSlice } from '@reduxjs/toolkit'
import dayjs from "dayjs";


const initialState = {
    date: dayjs()
}


const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        changeDate: (state, action) => {

            state.date = action.payload
        }
    },
  })
  
  export const {changeDate} = dateSlice.actions
  
  export default dateSlice.reducer