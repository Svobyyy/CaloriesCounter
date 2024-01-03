import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CaloriesCounter from "../utils/CaloriesCounter";

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

type Nutrition = {
  calories: number;
  protein: number;
  carbohydrates: number;
  fiber: number;
  fat: number;
};

type initialType = {
  products: ProductNative[];
  updateRequired: boolean;
  nutrition: Nutrition;
};

const initialState: initialType = {
  products: [],
  updateRequired: true,
  nutrition: {
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fiber: 0,
    fat: 0,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeProducts: (state, action: PayloadAction<ProductNative[]>) => {
      state.products = action.payload;

      state.nutrition = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fiber: 0,
        fat: 0,
      };

      state.products.forEach((section: any) => {
        section.data.forEach((data: any) => {
          const { carbohydrates, fat, protein, fiber, quantity } = data;
          console.log(protein);
          state.nutrition = {
            calories:
              state.nutrition.calories +
              CaloriesCounter(protein, carbohydrates, fiber, fat, quantity),
            protein: state.nutrition.protein + (protein / 100) * quantity,
            carbohydrates: state.nutrition.carbohydrates + (carbohydrates / 100) * quantity,
            fiber: state.nutrition.fiber + (fiber / 100) * quantity,
            fat: state.nutrition.fat + (fat / 100) * quantity,
          };
        });
      });

      console.log(state.nutrition);
    },

    updateProducts: (state) => {
      state.updateRequired = !state.updateRequired;
    },
  },
});

export const { changeProducts, updateProducts } = productsSlice.actions;

export default productsSlice.reducer;
