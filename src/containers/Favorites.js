import React from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

// ---- using built-in Context API 👇
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

// ---- using Redux 👇
// import { useSelector } from "react-redux";

const Favorites = (props) => {
  // ---- using built-in Context API 👇
  const { productsList } = useContext(ProductsContext);

  // ---- using Redux 👇
  // const productStore = useSelector((state) => state.products);
  // const { products: productsList } = productStore;

  console.log(productsList);

  // -- get favorite products
  const favoriteProducts = productsList.filter((product) => product.isFavorite);

  console.log(favoriteProducts);

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
