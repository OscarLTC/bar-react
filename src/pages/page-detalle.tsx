import { Detalle } from "../components/producto-component/detalle/detalle";
import { Header } from "../components/producto-component/header";

export const PageDetalle = () => {
  return (
    <div>
      <Header />
      <div className="p-8 ">
        <Detalle />
      </div>
    </div>
  );
};
