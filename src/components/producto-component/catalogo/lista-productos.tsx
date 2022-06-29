import "./lista-productos.css";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productoAtomo, productoSelector, productoVisibleAtomo } from "../../../storage/producto.selector";
import axios from "axios";
import { useEffect } from "react";

export const ListaProductos = () => {
  const p = useRecoilValue(productoSelector);
  const [productos, setProductos] = useRecoilState(productoVisibleAtomo);


  useEffect(() => {
    setProductos(p);
  }, [])
  
  const listarProductos = async () => {
    
    // setProductos(await (await axios.get("http://localhost:8069/producto/all")).data);

  }


  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {productos.map((producto: any) => (
        <Link to={"/" + producto.codigo} key={producto.codigo}>
          <div className="card-producto hover:brightness-95">
            <img 
              className="rounded-t-lg h-64 object-cover w-full border-b-2"
              src={producto.imagen}
              alt=""
            />
            <div className="p-4">
              <h5 className="mb-2 font-semibold text-xl tracking-tight text-gray-900 ">
                {producto.descripcion}
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                <b>Precio:</b> {producto.precio.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
