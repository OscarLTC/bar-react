export const Acceso = () => {
  return (
    <div>
      <div className="bg">
        <div className="flex flex-row min-h-screen  justify-center text-center items-center">
          <div className="card-acceso">
            <div className="titulo-codigo">
              Se envío un mensaje de confirmación a su correo
            </div>
            <div>
              <h1 className="text-2xl font-semibold my-3 mt-32 tracking-tight">
                Ingrese código de verificación
              </h1>
              <div className="gap-2 flex justify-center py-6">
                <input className="input-codigo" type="text" />
                <input className="input-codigo" type="text" />
                <input className="input-codigo" type="text" />
                <input className="input-codigo" type="text" />
                <input className="input-codigo" type="text" />
                <input className="input-codigo" type="text" />
              </div>
              <button className="buttons mt-10 px-10 text-lg font-bold tracking-wider">
                VERIFICAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
