import React from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

// ---- using built-in Context API 👇
// import { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";

// ---- using Redux 👇
// import { useSelector } from "react-redux";

// ---- using the custom Store built using Custom React Hooks 👇
import { useStore } from "../hooks-store/useStore";

const Favorites = (props) => {
  // ---- using Redux 👇
  // const productStore = useSelector((state) => state.products);
  // const { products: productsList } = productStore;

  // ---- using built-in Context API 👇
  // const { productsList } = useContext(ProductsContext);

  // ---- using the custom Store built using Custom React Hooks 👇
  const { globalState } = useStore();
  const productsList = globalState.products;

  // -- get favorite products
  const favoriteProducts = productsList.filter((product) => product.isFavorite);

  console.log("💖 Favorite Products List: ", productsList);

  if (favoriteProducts.length === 0)
    return <p className="placeholder">Got no favorites yet!</p>;

  return (
    favoriteProducts.length > 0 && (
      <ul>
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    )
  );
};

export default Favorites;
