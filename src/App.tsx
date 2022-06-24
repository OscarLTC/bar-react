import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageProducto } from "./pages/page-producto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<PageProducto />} />
      </Routes>
    </div>
  );
}

export default App;
