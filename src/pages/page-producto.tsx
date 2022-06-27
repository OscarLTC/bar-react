import { Route, Routes } from "react-router-dom";
import { Catalago } from "../components/producto-component/catalogo";
import { CatalagoSkeleton } from "../components/producto-component/catalogo/skeleton";
import { Detalle } from "../components/producto-component/detalle/detalle";
import { Header } from "../components/producto-component/header";

export const PageProducto = () => {
  return (
    <div>
      <Header />
      <div className="p-8">
        <Catalago />
      </div>
    </div>
  );
};
