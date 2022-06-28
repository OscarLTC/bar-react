export const Filtro = () => {
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
      <div className="flex items-center mb-1">
          <input id="" type="checkbox" value="" className="w-4 h-4"/>
          <label htmlFor="default-checkbox" className="ml-2 text-xl text-gray-900">Categoria</label>
      </div>


      <br/>

      <div className="text-3xl font-medium text-slate-600 mb-3">Marcas</div>
      <div className="flex items-center mb-1">
          <input id="" type="checkbox" value="" className="w-4 h-4"/>
          <label htmlFor="default-checkbox" className="ml-2 text-xl text-gray-900">Categoria</label>
      </div>

    </div>
  );
};
