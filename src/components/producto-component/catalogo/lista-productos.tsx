import "./lista-productos.css";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { useEffect } from "react";
import { productoFiltroMarCatAtomo, productoFiltroNombreAtomo, productoFiltroPrecioAtomo, productoVisibleAtomo } from "../../../storage/producto.atom";
import { productoSelector } from "../../../storage/producto.selector";

export const ListaProductos = () => {
  const p = useRecoilValue(productoSelector);
  const [productos, setProductos] = useRecoilState(productoVisibleAtomo);
  const [productoFiltroMarCat, setProductoFiltroMarCat] = useRecoilState(productoFiltroMarCatAtomo);
  const [productoFiltroPrecio, setProductoFiltroPrecio] = useRecoilState(productoFiltroPrecioAtomo);
  const [productoFiltroNombre, setProductoFiltroNombre] = useRecoilState(productoFiltroNombreAtomo);


  useEffect(() => {
    setProductos(p);
  }, [])
  
  const escogerProductos = ():never[] => {
    
    if (productoFiltroMarCat.length !== 0) return productoFiltroMarCat
    else if (productoFiltroPrecio.length !== 0) return productoFiltroPrecio
    else if (productoFiltroNombre.length !== 0) return productoFiltroNombre
    else return productos;

  }


  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {escogerProductos().map((producto: any) => (
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
