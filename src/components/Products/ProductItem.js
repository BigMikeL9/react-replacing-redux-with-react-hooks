import React, { useState } from "react";

import Card from "../UI/Card";
import "./ProductItem.css";

// ---- using Redux 👇
// import { useDispatch } from "react-redux";
// import { productActions } from "../../store/productSlice";

// ---- using built-in Context API 👇
// import { useContext } from "react";
// import { ProductsContext } from "../../context/ProductsContext";

// ---- using the custom Store built using Custom React Hooks 👇
import { useStore } from "../../hooks-store/useStore";

const ProductItem = (props) => {
  // ---- using Redux 👇
  // const dispatch = useDispatch();
  // console.log(productActions);

  // ---- using built-in Context API 👇
  // const { toggleFav } = useContext(ProductsContext);

  // ---- using the custom Store built using Custom React Hooks 👇
  const { dispatch } = useStore();
  // console.log(dispatch);

  // --------------------------------------------
  const toggleFavHandler = () => {
    // ---- using Redux 👇
    // dispatch(productActions.toggleFav({ itemId: props.id }));

    // ---- using built-in Context API 👇
    // toggleFav(props.id);

    // ---- using the custom Store built using Custom React Hooks 👇
    dispatch("TOGGLE_FAV", { itemId: props.id });
  };

  // --------------------------------------------
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : undefined}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : undefined}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
