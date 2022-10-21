import React from "react";
import { useSelector } from "react-redux";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  const productStore = useSelector((state) => state.products);

  const { products } = productStore;

  // console.log(products);

  // -- get favorite products
  const favoriteProducts = products.filter((product) => product.isFavorite);

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
