import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {

    const [usuario, setUsuario] = useState<any>([]);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onLoginSubmit = async (data: any) => {
        console.log(data)

        const user: any = await axios.post("http://localhost:8069/usuario/login", {
            email: data.email,
            pass: data.password
        })
        setUsuario(user.data)

        console.log(user)
        console.log(user.data)

        if(user.data.correo == data.email){
            navigate("/")
        }
        else{
            alert("TA mAL OEEE >:v")
        }

    };


    return (
        <div>
            <div className="bg">
                <div className="flex flex-row min-h-screen justify-center text-center items-center ">
                    <form className="card-acceso" onSubmit={handleSubmit(onLoginSubmit)}>
                        <h1 className="titulo">Iniciar Sesion</h1>
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
                            <label className="block mb-2 text-lg  font-bold text-gray-900 ">
                                Contraseña
                            </label>
                            <div className="flex px-10">
                                <input
                                    type="password"
                                    id="website-admin"
                                    className="rounded-lg border-2 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-900 p-2.5"
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

                            <button className="buttons  mt-10 px-14" >Acceder</button>
                        </div>
                        <br></br>
                        <div>
                            <Link to={"#"}>
                                <h5 className="linksss">¿Olvidaste tu contraseña?</h5>
                            </Link>
                            <Link to={"/registro/"}>
                                <h5 className="linksss">Eres nuevo?? Registrate aqui</h5>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
