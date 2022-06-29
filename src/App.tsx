import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageProducto } from "./pages/page-producto";
import { PageDetalle } from "./pages/page-detalle";
import { RecoilRoot } from "recoil";
import { PageAcceso } from "./pages/page-acceso";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Routes>
          <Route path="/" element={<PageProducto />} />
          <Route path="/:id" element={<PageDetalle />} />
          <Route path="/registro/" element={<PageAcceso />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
