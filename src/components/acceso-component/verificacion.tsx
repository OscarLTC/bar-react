import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserState } from "../../storage/usuario.atom";

export const Verificacion = () => {
  const [usuario, setUsuario] = useRecoilState(UserState);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onPassSubmit = async (data: any) => {
    if (data.pass === data.password) {
      await axios.put("http://localhost:8069/usuario", {
        email: usuario.correo,
        pass: data.pass,
      });
      navigate("/login");
    } else {
      alert("Las contraseñas son distintas");
    }
  };
  return (
    <div>
      <div className="bg">
        <div className="flex flex-row min-h-screen justify-center text-center items-center ">
          <form
            className="card-acceso py-20"
            onSubmit={handleSubmit(onPassSubmit)}
          >
            <div>
              <label className="block mb-2 text-2xl  font-bold text-[#315705] ">
                Nueva Contraseña
              </label>
              <div className="relative mb-6 px-10">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="pass"
                  autoFocus
                  className="bg-gray-50 border-2 border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5  "
                  {...register("pass", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                />
                {errors.pass && (
                  <p className="text-red-900 text-lg bold">
                    {errors.pass.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block mb-2 text-2xl  font-bold text-[#315705] ">
                Confirmar Contraseña
              </label>
              <div className="flex px-10">
                <input
                  type="password"
                  id="website-admin"
                  className="rounded-lg border-2 bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-900 p-2.5"
                  placeholder=""
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida",
                    },
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-900 text-lg bold">
                  {errors.password.message}
                </p>
              )}
              <button className="buttons  mt-10 px-14">Acceder</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
