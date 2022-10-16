import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import FavoritesPage from "./containers/Favorites";
import ProductsPage from "./containers/Products";

const App = (props) => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
