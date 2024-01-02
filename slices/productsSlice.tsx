import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductNative = {
  title: string;
  data: {
    _id: string;
    carbohydrates: number;
    fat: number;
    fiber: number;
    name: string;
    protein: number;
    quantity: number;
  };
};

type initialType = {
  products: ProductNative[];
  updateRequired: boolean
};

const initialState: initialType = {
  products: [],
  updateRequired: true
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeProducts: (state, action: PayloadAction<ProductNative[]>) => {
      state.products = action.payload;
    },
    updateProducts: (state) => {
      state.updateRequired = !state.updateRequired
    }
  },
});

export const { changeProducts, updateProducts } = productsSlice.actions;

export default productsSlice.reducer;
