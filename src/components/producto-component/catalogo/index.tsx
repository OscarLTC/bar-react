import axios from "axios";
import { useEffect, useState } from "react";
import { Filtro } from "./filtro";
import { ListaProductos } from "./lista-productos";
import { CatalagoSkeleton } from "./skeleton";

export const Catalago = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const obtenerProductos = async () => {
      await axios.get("http://localhost:8069/producto/all");
      setIsLoading(false);
    };
    obtenerProductos();
  }, []);

  if (isLoading) {
    return <CatalagoSkeleton />;
  }
  return (
    <div>
      <div>
        <h1 className="font-medium text-4xl text-center md:text-left">
          Catalogo de Productos
        </h1>
        <div className="flex gap-5 container mx-auto mt-5">
          <Filtro />
          <ListaProductos />
        </div>
      </div>
    </div>
  );
};
