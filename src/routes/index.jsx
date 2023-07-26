import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { Produto } from "../Pages/produto";
import ComponenteNav from "../Componentes/ComponenteNav";

export function RouteApp() {
    return (
      <React.Fragment>
      <ComponenteNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    );
  }