import axios from "axios";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const productoAtomo = atom({
  key: "productoAtomo",
  default: []  
});

export const productoVisibleAtomo = atom({
  key: "productoVisibleAtomo",
  default: []
})

export const productoSelector = selector({
  key: "productoSelector",
  get: async () => {
    
    const [proAtomo, setProAtomo] = useRecoilState(productoAtomo);
    
    const productos = (await (await axios.get("http://localhost:8069/producto/all")).data);
    setProAtomo(productos);
    return productos;
  }
})




