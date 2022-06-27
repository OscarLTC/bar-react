import axios from "axios";
import { selector } from "recoil";

export const productoSelector = selector({
  key: "productoSelector",
  get: async () => {
    let producto: any = [];

    producto = await axios.get("http://localhost:8069/producto/all");
    producto = producto.data;

    return producto;
  },
});
