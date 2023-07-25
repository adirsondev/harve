import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { Produto } from "../Pages/produto";




export function RouteApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    );
  }

/Users/adirson/Desktop/harve/ecommerce/src/routes/index.jsx