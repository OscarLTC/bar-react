import axios from "axios";
import "./catalogo.css";
import { useEffect, useState } from "react";

export const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const result = await axios.get("http://localhost:8069/producto");
      setProductos(result.data);
    };
    obtenerProductos();
  }, []);

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {productos.map((producto: any) => (
        <div className="card-producto" key={producto.codigo}>
          <a href="#">
            <img
              className="rounded-t-lg h-64 object-cover w-full border-b-2 "
              src={producto.imagen}
              alt=""
            />
          </a>
          <div className="p-4">
            <a href="#">
              <h5 className="mb-2 font-semibold text-xl tracking-tight text-gray-900 ">
                {producto.descripcion}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              <b>Precio:</b> {producto.precio.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
