import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriaAtomo, categoriaVisibleAtomo, marcaAtomo, marcaVisibleAtomo, productoAtomo, productoFiltroMarCatAtomo, productoFiltroNombreAtomo, productoFiltroPrecioAtomo, productoVisibleAtomo } from "../../../storage/producto.atom";


export const Filtro = () => {


  const [categorias, setCategorias] = useRecoilState(marcaAtomo);
  const [marcas, setMarcas] = useRecoilState(categoriaAtomo);

  const [marcasVisibles, setMarcasVisibles] = useRecoilState<any>(marcaVisibleAtomo);
  const [categoriasVisibles, setCategoriasVisibles] = useRecoilState<any>(categoriaVisibleAtomo);

  const [productos, setProductos] = useRecoilState(productoAtomo);
  const [productosVisibles, setProductosVisibles] = useRecoilState(productoVisibleAtomo);

  const [preInicial, setPreInicial] = useState(0.0);
  const [preFinal, setPreFinal] = useState(0.0);

  const [productoFiltroMarCat, setProductoFiltroMarCat] = useRecoilState(productoFiltroMarCatAtomo);
  const [productoFiltroPrecio, setProductoFiltroPrecio] = useRecoilState(productoFiltroPrecioAtomo);
  const [productoFiltroNombre, setProductoFiltroNombre] = useRecoilState(productoFiltroNombreAtomo);


  useEffect(() => {
    
    cargarCategorias();
    cargarMarcas();
    // console.log(productos);
  }, [])

  useEffect(() => {
    // console.log(marcasVisibles);
    let productosFiltrados:any = []
    console.log("activando")
    if (categoriasVisibles.length === 1 || marcasVisibles.length === 1){
      
      
      productos.forEach((p:any) => {
        p.marca.categoria.codigo === categoriasVisibles[0].codigo ? productosFiltrados.push(p): null;
      })

      if (marcasVisibles.length === 1){
        productosFiltrados = productosFiltrados.filter((p:any) => p.marca.codigo === marcasVisibles[0].codigo)
      }
      
      vaciarInputs();
      setPreInicial(0);
      setPreFinal(0);
      
      setProductoFiltroMarCat(productosFiltrados);
      
      
      
    } else{
      setProductoFiltroMarCat([]);  
    }
  }, [categoriasVisibles, marcasVisibles]);

  useEffect(() => {

    let productosFiltrados:any = []

    productos.forEach((p:any) => {
      p.precio >= preInicial && (preFinal >0 && preFinal > preInicial ? p.precio <= preFinal: true) ? productosFiltrados.push(p) : null;
    })
    // console.log(productosFiltrados);
    setProductoFiltroPrecio(productosFiltrados);

    //Vaciamos marcas y categorias a como estaban al inicio
     setCategoriasVisibles(categorias.map((c:any) => ({...c, activo: false})));
     setMarcasVisibles([]);
     setProductoFiltroNombre([]);

  }, [preInicial, preFinal])
  
  const cargarCategorias = async () => {
    const categoriasJson = await axios.get("http://localhost:8069/categoria/all");
    setCategorias(categoriasJson.data);
    const tempCat:Array<any> = [];
    categoriasJson.data.forEach((c:any) => {tempCat.push({...c, activo: false});})
    setCategoriasVisibles(tempCat);
  }

  const cargarMarcas = async () => {
    const marcasJson = await axios.get("http://localhost:8069/marca/all");
    setMarcas(marcasJson.data);
   
  }

  const filtrarCategorias = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked){
      
      setCategoriasVisibles(categorias.map((c:any) => String(c.codigo) === e.target.id.substring(3) ? {...c, activo: true} : c).filter(c => String(c.codigo) === e.target.id.substring(3)));
      setMarcasVisibles(marcas.map((m:any) => {return {...m, activo: false}}).filter(m => String(m.categoria.codigo) === e.target.id.substring(3)));
    } else{
      setCategoriasVisibles(categorias);
      setMarcasVisibles([]);
    }
  }

  const filtrarMarcas = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked){
      setMarcasVisibles(marcas.filter((m:any) => String(m.codigo) === e.target.id.substring(3)));
    } else{
      setMarcasVisibles(marcas.map((m:any) => {return {...m, activo: false}}).filter(m => String(m.categoria.codigo) === String(categoriasVisibles[0].codigo)));
    }
  }

  const soloNumeros =  (e:React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;
    valor = valor.substring(0,1) === "0" ? valor = valor.substring(1) : valor;
    let nuevoValor = "";

    for (let c of valor){
      if (c.charCodeAt(0) >=48 && c.charCodeAt(0)<=57){
        nuevoValor += c;
      }
    }
    console.log(nuevoValor);
    if (nuevoValor === "") nuevoValor = "0";
    const $input:(any) = document.getElementById(e.target.id);
    $input !== null ? $input.value = nuevoValor : null; 
    
    e.target.id === "desde" ? setPreInicial(parseFloat(nuevoValor)) : setPreFinal(parseFloat(nuevoValor));
    
  }

  const vaciarInputs = () => {
    const $desde:(any) = document.getElementById("desde");
    $desde !== null ? $desde.value = "" : null; 
    const $hasta:(any) = document.getElementById("hasta");
    $hasta !== null ? $hasta.value = "" : null; 
  }



  return (
    <div className="w-4/12 bg-gray-100 px-10 py-8 rounded-md">
      <div className="text-3xl font-medium text-slate-600 mb-3">Precios</div>
      <div className="flex flex-row flex-wrap justify-between">
        <input id = "desde" className="w-32 rounded-md border-2 px-4 py-1 my-2 text-center border-green-700 outline-none" placeholder="desde" onChange={e => soloNumeros(e)}/>
        <span className="text-2xl font-medium text-slate-600 mx-3">-</span>
        <input id = "hasta" className="w-32 rounded-md border-2 px-4 py-1 my-2 text-center border-green-700 outline-none" placeholder="hasta" onChange={e => soloNumeros(e)}/>
      </div>

      <br/>

      <div className="text-3xl font-medium text-slate-600 mb-3">Categorías</div>

      {
        categoriasVisibles.map((c:any) => {
          return <div key = {c.codigo} className="flex items-center mb-1"> 
              <input  id={"cat" + c.codigo} type="checkbox" checked = {c.activo} className="w-4 h-4" onChange={e => {filtrarCategorias(e)}}/>
              <label htmlFor={"cat" + c.codigo} className="ml-2 text-xl text-gray-900">{c.nombre}</label>
          </div>
        })
      }

      

      <br/>

      <div className="text-3xl font-medium text-slate-600 mb-3">Marcas</div>
      {
        marcasVisibles.map((m:any) => {
          return  <div key = {m.codigo} className="flex items-center mb-1">
                    <input id={"mar" + m.codigo} type="checkbox" value="" className="w-4 h-4" checked = {m.activo} onChange={e => {filtrarMarcas(e)}}/>
                    <label htmlFor={"mar" + m.codigo} className="ml-2 text-xl text-gray-900">{m.nombre}</label>
                  </div>
        })
      }
    </div>
  );
};
