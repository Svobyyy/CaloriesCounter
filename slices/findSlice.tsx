import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    find: []
}


const dateSlice = createSlice({
    name: 'find',
    initialState,
    reducers: {
        changeDate: (state, action) => {

            state.find = action.payload
        }
    },
  })
  
  export const {changeDate} = dateSlice.actions
  
  export default dateSlice.reducer