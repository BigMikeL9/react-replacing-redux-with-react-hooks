import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFav(state, action) {
      // console.log(current(state));
      // console.log(action);

      const activeProd_Index = state.products.findIndex((product) => {
        return product.id === action.payload.itemId;
      });

      state.products[activeProd_Index].isFavorite =
        !state.products[activeProd_Index].isFavorite;

      console.log(
        "CURRENT State after changing item:",
        current(state.products[activeProd_Index])
      );
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
