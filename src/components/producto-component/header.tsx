import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { categoriaVisibleAtomo, marcaAtomo, marcaVisibleAtomo, productoAtomo, productoFiltroMarCatAtomo, productoFiltroNombreAtomo, productoFiltroPrecioAtomo } from "../../storage/producto.atom";
import "./header.css";

export const Header = () => {

  const [busqueda, setBusqueda] = useState<string>();

  const [productoFiltroMarCat, setProductoFiltroMarCat] = useRecoilState(productoFiltroMarCatAtomo);
  const [productoFiltroPrecio, setProductoFiltroPrecio] = useRecoilState(productoFiltroPrecioAtomo);
  const [productoFiltroNombre, setProductoFiltroNombre] = useRecoilState(productoFiltroNombreAtomo);

  const [categorias, setCategorias] = useRecoilState(marcaAtomo);

  const [preInicial, setPreInicial] = useState(0.0);
  const [preFinal, setPreFinal] = useState(0.0);

  const [marcasVisibles, setMarcasVisibles] = useRecoilState<any>(marcaVisibleAtomo);
  const [categoriasVisibles, setCategoriasVisibles] = useRecoilState<any>(categoriaVisibleAtomo);

  const [productos, setProductos] = useRecoilState(productoAtomo);

  const buscarProducto = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    // console.log("hoala");
    //Limpiando filtros
    setProductoFiltroMarCat([]);
    setProductoFiltroPrecio([]);
    setCategoriasVisibles(categorias.map((c:any) => ({...c, activo: false})));
    setMarcasVisibles([]);
    const $desde:(any) = document.getElementById("desde");
    $desde !== null ? $desde.value = "" : null; 
    const $hasta:(any) = document.getElementById("hasta");
    $hasta !== null ? $hasta.value = "" : null; 
    setPreInicial(0);
    setPreFinal(0);

    //Filtrando por nombre
    setProductoFiltroNombre(productos.filter((p:any) => p.descripcion.toLowerCase().includes(busqueda?.toLowerCase())));
    console.log();
  }

  return (
    <nav className="nav">
      <div className="nav-position">
        <Link to="/">
          <div className="flex items-center space-x-5">
            <img
              src="https://placekitten.com/1200/1200"
              className="mr-3 w-16 h-16 sm:h-16 rounded-full"
            />
            <span className="self-center font-mono text-3xl font-semibold whitespace-nowrap dark:text-white">
              Bar La China
            </span>
          </div>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="mobile-menu-3"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </button>
          <div className="hidden relative md:contents space-x-2">
            <input
              type="text"
              id="search-navbar"
              className="block p-2 w-52 lg:w-80   text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm  dark:border-green-800 border-none dark:placeholder-gray-400"
              placeholder="Buscar..."
              onChange={e => setBusqueda(e.target.value)}
            />
            <button className="buttons" onClick={e => buscarProducto(e)}>
              <svg
                className="w-6 h-6 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </button>
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-2"
          id="mobile-menu-3"
        >
          <div className="relative mt-3 sm:hidden">
            <div className="flex absolute inset-y-0 left-0  items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex flex-col text-white mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-md md:font-medium pr-2">
            <li className="buttons lg:px-10 px-5">
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 border-b border-gray-100  md:border-0 md:p-0 "
              >
                Mis Pedidos
              </Link>
            </li>
            <li className="buttons">
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 border-b border-gray-100  md:border-0 md:p-0"
              >
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
