// --------------------------------------
// Using 'Context API' to manage global/App-wide state.

/*
  - 🛑 NOT the best solution especially when we have state that gets updated frequently, like a shopping cart for instance 
  - 🟢 'Context API' is a GOOD for managing global/app-wide state when the state doesn't change frequently, like for user-login/authentication or a theme
*/
// --------------------------------------

import React, { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (itemId) => {},
});

const ProductsContextProvider = (props) => {
  const [productsList, setProductsList] = useState([
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
  ]);

  const toggleFav = (itemId) => {
    setProductsList((prevState) => {
      const itemIndex = productsList.findIndex((prod) => prod.id === itemId);

      // console.log(prevState);

      // --- make copy of prev productsList
      // ⭐ NEED to create a copy of the previous productsList array because its a reference type and remember reference types point to allocated piece of memory in the Call-Stack which will have a value equal to the memory address that is in the heap, so react wont be able to detect a change in state if we update the prevState itself without making a new copy of it then updating it.
      const newProductsList = [...prevState];

      // --- update current product item
      newProductsList[itemIndex] = {
        ...newProductsList[itemIndex],
        isFavorite: !newProductsList[itemIndex].isFavorite,
      };

      // console.log(updatedList);

      return newProductsList;
    });
  };

  return (
    <ProductsContext.Provider value={{ productsList, toggleFav }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
