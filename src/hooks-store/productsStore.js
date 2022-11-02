// --------------------------------------
// This file will be used to INITIALIZE the store for products, using the store we built using CUSTOM HOOKS 'useStore'
// --------------------------------------

import { initStore } from "./useStore";

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

// --------------------------------------------------------------
// set the initial value of the 'globalState'
// and add actions that can be dispatched from each component that uses the 'useStore' hook

const configureStore = () => {
  const actions = {
    TOGGLE_FAV(state, payload) {
      // --- just like in Context API 'ProductsContext.js'

      // get the index of current active product item
      const activeItem_Index = state.products.findIndex(
        (item) => item.id === payload.itemId
      );

      // create a copy of previous state
      const newProductsList = [...state.products];

      // update active product item in new copy of global state
      newProductsList[activeItem_Index] = {
        ...newProductsList[activeItem_Index],
        isFavorite: !newProductsList[activeItem_Index].isFavorite,
      };

      // return the new state to override the old one
      return { products: newProductsList };
    },
  };

  initStore(initialState, actions);
};

export default configureStore;
