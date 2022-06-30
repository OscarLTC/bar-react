import { atom } from "recoil";
import { localStorageEffects } from "./effects";

export const UserState = atom<any>({
  key: "userState",
  default: null,
  effects: [localStorageEffects("usuario")],
});
