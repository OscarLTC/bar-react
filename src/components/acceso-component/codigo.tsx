import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CodigoState } from "../../storage/codigo.atom";
import { UserState } from "../../storage/usuario.atom";

export const Acceso = () => {
  const navigate = useNavigate();
  const codigo = useRecoilValue(CodigoState);
  const usuario = useRecoilValue(UserState);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onAccesoSubmit = (data: any) => {
    let cod = "";
    for (let i = 1; i <= 6; i++) {
      cod += data[i];
    }

    if (cod == codigo) {
      navigate("/");
      axios.post("http://localhost:8069/usuario", {
        contrasena: usuario.password,
        correo: usuario.email,
        rol: {
          rol: 2,
          nombre: "cliente",
        },
      });
    }
  };

  return (
    <div>
      <div className="bg">
        <div className="flex flex-row min-h-screen  justify-center text-center items-center">
          <div className="card-acceso">
            <div className="titulo-codigo">
              Se envío un mensaje de confirmación a su correo
            </div>
            <form onSubmit={handleSubmit(onAccesoSubmit)}>
              <h1 className="text-2xl font-semibold my-3 mt-32 tracking-tight">
                Ingrese código de verificación
              </h1>
              <div className="gap-2 flex justify-center py-6">
                <input
                  {...register("1", {
                    required: true,
                    maxLength: 1,
                    minLength: 1,
                  })}
                  maxLength={1}
                  minLength={1}
                  type="text"
                  className="input-codigo"
                />
                <input
                  {...register("2", {
                    required: true,
                    maxLength: 1,
                    minLength: 1,
                  })}
                  maxLength={1}
                  minLength={1}
                  className="input-codigo"
                  type="text"
                />
                <input
                  {...register("3", {
                    required: true,
                    maxLength: 1,
                    minLength: 1,
                  })}
                  maxLength={1}
                  minLength={1}
                  className="input-codigo"
                  type="text"
                />
                <input
                  {...register("4", {
                    required: true,
                    maxLength: 1,
                    minLength: 1,
                  })}
                  maxLength={1}
                  minLength={1}
                  className="input-codigo"
                  type="text"
                />
                <input
                  {...register("5", {
                    required: true,
                    maxLength: 1,
                    minLength: 1,
                  })}
                  maxLength={1}
                  minLength={1}
                  className="input-codigo"
                  type="text"
                />
                <input
                  {...register("6", {
                    required: true,
                    maxLength: 1,
                    minLength: 1,
                  })}
                  maxLength={1}
                  minLength={1}
                  className="input-codigo"
                  type="text"
                />
              </div>
              <button className="buttons mt-10 px-10 text-lg font-bold tracking-wider">
                VERIFICAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
