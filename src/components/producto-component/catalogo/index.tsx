import { Filtro } from "./filtro";
import { ListaProductos } from "./lista-productos";

export const Catalago = () => {
  return (
    <div className="p-2 border-x-2 border-black">
      <h1 className="font-medium text-4xl text-center md:text-left">
        Catalogo de Productos
      </h1>
      <div className="flex gap-5 container mx-auto mt-5">
        <Filtro />
        <ListaProductos />
      </div>
    </div>
  );
};
