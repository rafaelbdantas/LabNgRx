import { UsuariosEffects } from './usuarios/usuarios.effects';
import { ActionReducerMap } from "@ngrx/store";
import { usuariosReducer, UsuarioState } from "./usuarios/usuarios.reducer";

export interface AppState{
    usuarios: UsuarioState
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
}

export const appEffects = [
    UsuariosEffects
];