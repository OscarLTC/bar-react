import { Catalogo } from "../components/producto-component/catalogo";
import { Filtro } from "../components/producto-component/filtro";
import { Header } from "../components/producto-component/header";

export const PageProducto = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="font-medium text-4xl text-center md:text-left">
          Catalogo de Productos
        </h1>
        <div className="flex gap-5 container mx-auto mt-5">
          <Filtro />
          <Catalogo />
        </div>
      </div>
    </div>
  );
};
