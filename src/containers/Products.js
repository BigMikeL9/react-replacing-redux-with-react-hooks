import React from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

// ---- using Redux 👇
// import { useSelector } from "react-redux";

// ---- using built-in Context API 👇
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Products = (props) => {
  // ---- using Redux 👇
  // const productsStore = useSelector((state) => state.products);
  // const { products: productsList } = productsStore;

  // ---- using built-in Context API 👇
  const { productsList } = useContext(ProductsContext);

  console.log(productsList);

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
