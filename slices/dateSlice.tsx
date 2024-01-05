import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

type initialType = {
  date: Dayjs;
};

const initialState: initialType = {
  date: dayjs(),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<Dayjs>) => {
      state.date = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;
