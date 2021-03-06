import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PageProducto } from "./pages/page-producto";
import { PageDetalle } from "./pages/page-detalle";
import { RecoilRoot } from "recoil";
import { PageAcceso } from "./pages/page-acceso";
import { Register } from "./components/acceso-component/register";
import { Login } from "./components/inicio-component/login";
import { Olvidaste } from "./components/acceso-component/olvidaste";
import { Verificacion } from "./components/acceso-component/verificacion";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Routes>
          <Route path="/" element={<PageProducto />} />
          <Route path="/:id" element={<PageDetalle />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/registro/acceso" element={<PageAcceso />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/olvidaste" element={<Olvidaste />} />
          <Route path="/olvidaste/verificacion" element={<Verificacion />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
