import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CodigoState } from "../../storage/codigo.atom";
import { UserState } from "../../storage/usuario.atom";

export const Olvidaste = () => {
  const [codigo, setCodigo] = useRecoilState(CodigoState);
  const [usuario, setUsuario] = useRecoilState(UserState);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = async (email: any, codigo: any) => {
    await axios.post("http://localhost:3001/api", {
      email: email,
      asunto: "Código de verificación",
      mensaje: `Su código de verificación es: ${codigo}`,
    });
  };

  const onEmailSubmit = async (data: any) => {
    const email: any = await axios
      .get("http://localhost:8069/usuario/email/" + data.email)
      .then((datos) => datos.data);
    if (!email) {
      alert("Este correo no ha creado una cuenta");
    } else {
      setUsuario(email);
      const cod = Math.floor(100000 + Math.random() * 900000);
      navigate("/registro/acceso");
      setCodigo(cod);
      sendEmail(data.email, cod);
    }
  };

  return (
    <div>
      <div className="bg">
        <div className="flex flex-row min-h-screen justify-center text-center items-center ">
          <form className="card-acceso" onSubmit={handleSubmit(onEmailSubmit)}>
            <h1 className="titulo">Verificación</h1>
            <div>
              <label className="block mb-2 text-lg  font-bold text-gray-900 ">
                Ingrese su correo electronico
              </label>
              <div className="relative mb-6 px-10">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="correo"
                  autoFocus
                  className="bg-gray-50 border-2 border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5  "
                  placeholder="name@flowbite.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "El correo es requerido",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El correo no es válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-900 text-lg italic">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button className="buttons  mt-10 px-14">Acceder</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
