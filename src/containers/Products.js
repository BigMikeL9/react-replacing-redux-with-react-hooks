import React, { useEffect } from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

// ---- using Redux 👇
// import { useSelector } from "react-redux";

// ---- using built-in Context API 👇
// import { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";

// ---- using the custom Store built using Custom React Hooks 👇
import { useStore } from "../hooks-store/useStore";

const Products = (props) => {
  // ---- using Redux 👇
  // const productsStore = useSelector((state) => state.products);
  // const { products: productsList } = productsStore;

  // ---- using built-in Context API 👇
  // const { productsList } = useContext(ProductsContext);

  // ---- using the custom Store built using Custom React Hooks 👇
  const { globalState } = useStore();
  const productsList = globalState.products;

  // console.log("Products List: ", productsList);

  return (
    <ul className="products-list">
      {productsList &&
        productsList.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            isFav={prod.isFavorite}
          />
        ))}
    </ul>
  );
};

export default Products;
