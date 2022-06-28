import "./acceso.css";

export const Register = () => {
  return (
    <div className="bg">
      <div className="flex flex-row min-h-screen justify-center text-center items-center ">
        <div className="card-acceso">
          <h1 className="titulo">Regístrate</h1>
          <div>
            <label className="block mb-2 text-lg  font-bold text-gray-900 ">
              Correo
            </label>
            <div className="relative mb-6 px-10">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                id="input-group-1"
                autoFocus
                className="bg-gray-50 border-2 border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5  "
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg  font-bold text-gray-900 ">
              Contraseña
            </label>
            <div className="flex px-10">
              <input
                type="password"
                id="website-admin"
                className="rounded-lg border-2 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-900 p-2.5"
                placeholder=""
              />
            </div>
            <button className="buttons  mt-10 px-14">REGISTRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};
