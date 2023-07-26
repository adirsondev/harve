import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { Products } from "../Pages/products";
import ComponenteNav from "../Componentes/ComponenteNav";

export function RouteApp() {
    return (
      <React.Fragment>
      <ComponenteNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    );
  }