import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  __v: number;
  _id: string;
  carbohydrates: number;
  fat: number;
  fiber: number;
  name: string;
  protein: number;
};

type initialType = {
  find: Product[];
  section: string;
};

const initialState: initialType = {
  find: [],
  section: "",
};

const findSlice = createSlice({
  name: "find",
  initialState,
  reducers: {
    changeFind: (state, action: PayloadAction<Product[]>) => {
      state.find = action.payload;
    },
    changeSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },
});

export const { changeFind, changeSection } = findSlice.actions;

export default findSlice.reducer;
