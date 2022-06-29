import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productoAtomo, productoVisibleAtomo } from "../../../storage/producto.selector";


export const Filtro = () => {


  const [categorias, setCategorias] = useState<any[]>([]);
  const [marcas, setMarcas] = useState<any[]>([]);

  const [marcasVisibles, setMarcasVisibles] = useState<any[]>([]);
  const [categoriasVisibles, setCategoriasVisibles] = useState<any[]>([]);

  const [productos, setProductos] = useRecoilState(productoAtomo);
  const [productosVisibles, setProductosVisibles] = useRecoilState(productoVisibleAtomo);

  useEffect(() => {
    
    cargarCategorias();
    cargarMarcas();
    console.log(productos);
  }, [])

  useEffect(() => {
    // console.log(marcasVisibles);
    let productosFiltrados:any = []
    if (categoriasVisibles.length === 1 || marcasVisibles.length === 1){
      
      
      productos.forEach((p:any) => {
        p.marca.categoria.codigo === categoriasVisibles[0].codigo ? productosFiltrados.push(p): null;
      })

      if (marcasVisibles.length === 1){
        productosFiltrados = productosFiltrados.filter((p:any) => p.marca.codigo === marcasVisibles[0].codigo)
      }

      setProductosVisibles(productosFiltrados);
    } else{
      setProductosVisibles(productos);  
    }
  }, [categoriasVisibles, marcasVisibles]);
  
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
      
      setCategoriasVisibles(categorias.map(c => String(c.codigo) === e.target.id.substring(3) ? {...c, activo: true} : c).filter(c => String(c.codigo) === e.target.id.substring(3)));
      setMarcasVisibles(marcas.map(m => {return {...m, activo: false}}).filter(m => String(m.categoria.codigo) === e.target.id.substring(3)));
    } else{
      setCategoriasVisibles(categorias);
      setMarcasVisibles([]);
    }
  }

  const filtrarMarcas = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked){
      setMarcasVisibles(marcas.filter(m => String(m.codigo) === e.target.id.substring(3)));
    } else{
      setMarcasVisibles(marcas.map(m => {return {...m, activo: false}}).filter(m => String(m.categoria.codigo) === String(categoriasVisibles[0].codigo)));
    }
  }



  return (
    <div className="w-4/12 bg-gray-100 px-10 py-8 rounded-md">
      <div className="text-3xl font-medium text-slate-600 mb-3">Precios</div>
      <div className="flex flex-row flex-wrap justify-between">
        <input className="w-32 rounded-md border-2 px-4 py-1 my-2 text-center border-green-700 outline-none" placeholder="desde"/>
        <span className="text-2xl font-medium text-slate-600 mx-3">-</span>
        <input className="w-32 rounded-md border-2 px-4 py-1 my-2 text-center border-green-700 outline-none" placeholder="hasta"/>
      </div>

      <br/>

      <div className="text-3xl font-medium text-slate-600 mb-3">Categorías</div>

      {
        categoriasVisibles.map(c => {
          return <div key = {c.codigo} className="flex items-center mb-1"> 
              <input  id={"cat" + c.codigo} type="checkbox" checked = {c.activo} className="w-4 h-4" onChange={e => {filtrarCategorias(e)}}/>
              <label htmlFor={"cat" + c.codigo} className="ml-2 text-xl text-gray-900">{c.nombre}</label>
          </div>
        })
      }

      

      <br/>

      <div className="text-3xl font-medium text-slate-600 mb-3">Marcas</div>
      {
        marcasVisibles.map(m => {
          return  <div key = {m.codigo} className="flex items-center mb-1">
                    <input id={"mar" + m.codigo} type="checkbox" value="" className="w-4 h-4" checked = {m.activo} onChange={e => {filtrarMarcas(e)}}/>
                    <label htmlFor={"mar" + m.codigo} className="ml-2 text-xl text-gray-900">{m.nombre}</label>
                  </div>
        })
      }
    </div>
  );
};
