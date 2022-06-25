import { Catalago } from "../components/producto-component/catalogo";
import { Detalle } from "../components/producto-component/detalle/[id]";
import { Header } from "../components/producto-component/header";

export const PageProducto = () => {
  return (
    <div>
      <Header />
      <div className="p-8 ">
        <Catalago />
      </div>
    </div>
  );
};
