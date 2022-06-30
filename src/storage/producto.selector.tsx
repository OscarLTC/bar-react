import axios from "axios";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import {
  categoriaAtomo,
  categoriaVisibleAtomo,
  marcaAtomo,
  marcaVisibleAtomo,
  productoAtomo,
} from "./producto.atom";

export const productoSelector = selector({
  key: "productoSelector",
  get: async () => {
    const [proAtomo, setProAtomo] = useRecoilState(productoAtomo);

    const productos = await (
      await axios.get("http://localhost:8069/producto/all")
    ).data;
    setProAtomo(productos);
    return productos;
  },
});

export const categoriaSelector = selector({
  key: "categoriaSelector",
  get: async () => {
    const categoriasJson = await axios.get(
      "http://localhost:8069/categoria/all"
    );
    const [catAtomo, setCatAtomo] = useRecoilState(categoriaAtomo);
    const [catVisibleAtomo, setCatVisibleAtomo] = useRecoilState(
      categoriaVisibleAtomo
    );
    setCatAtomo(categoriasJson.data);
    const tempCat: any = [];
    categoriasJson.data.forEach((c: any) => {
      tempCat.push({ ...c, activo: false });
    });
    setCatVisibleAtomo(tempCat);
  },
});

export const marcaSelector = selector({
  key: "marcaSelector",
  get: async () => {
    const categoriasJson = await axios.get("http://localhost:8069/marca/all");
    const [marAtomo, setMarAtomo] = useRecoilState(marcaAtomo);
    const [marVisibleAtomo, setMarVisibleAtomo] =
      useRecoilState(marcaVisibleAtomo);
    setMarAtomo(categoriasJson.data);
    setMarVisibleAtomo(categoriasJson.data);
  },
});
