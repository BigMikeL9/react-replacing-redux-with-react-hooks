import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const productsStore = useSelector((state) => state.products);

  // console.log(productsStore);

  const { products: productList } = productsStore;

  return (
    <ul className="products-list">
      {productList &&
        productList.map((prod) => (
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
