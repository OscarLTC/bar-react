import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageProducto } from "./pages/page-producto";
import { Detalle } from "./components/producto-component/detalle/detalle";
import { PageDetalle } from "./pages/page-detalle";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Routes>
          <Route path="/" element={<PageProducto />} />
          <Route path="/:id" element={<PageDetalle />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
