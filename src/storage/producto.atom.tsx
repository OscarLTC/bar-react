import { atom } from "recoil";

export const productoAtomo = atom({
  key: "productoAtomo",
  default: [],
});

export const productoVisibleAtomo = atom({
  key: "productoVisibleAtomo",
  default: [],
});

export const productoFiltroMarCatAtomo = atom({
  key: "productoFiltroMarCatAtomo",
  default: [],
});

export const productoFiltroPrecioAtomo = atom({
  key: "productoFiltroPrecioAtomo",
  default: [],
});

export const productoFiltroNombreAtomo = atom({
  key: "productoFiltroNombreAtomo",
  default: [],
});


export const categoriaAtomo = atom({
    key: 'categoriaAtomo',
    default: []
})

export const categoriaVisibleAtomo = atom({
    key: 'categoriaVisibleAtomo',
    default: []
})

export const marcaAtomo = atom({
    key: 'marcaAtomo',
    default: []
})

export const marcaVisibleAtomo = atom({
    key: 'marcaVisibleAtomo',
    default: []
})
