import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';
import * as fromUsuarioActions from '../usuarios/usuarios.actions';

export interface UsuarioState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string;
}

export const initialState: UsuarioState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuarioReducer = createReducer(
  initialState,
  on(fromUsuarioActions.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuarioActions.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    usuarios: [],
    error: error,
  })),

  on(fromUsuarioActions.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuarioActions.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuarioActions.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuarioActions.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuarioActions.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id == payload.id) return payload;
      else return row;
    }),
    error: '',
  })),
  on(fromUsuarioActions.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuarioActions.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((usuario) => usuario.id != payload),
    error: '',
  })),
  on(fromUsuarioActions.DeleteUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

export function usuariosReducer(state = initialState, action: Action) {
  return _usuarioReducer(state, action);
}

const getUsuariosFeatureState = createFeatureSelector<UsuarioState>('usuarios');

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios
);

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuario
);

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.error
);

export const obterUsuario = (props: {id: number}) =>   
  createSelector(     
    getUsuariosFeatureState,
    (state: UsuarioState) => <UsuarioModel>{...state.usuarios.find(u => u.id === props.id)}
  );


  export const getUsuariosAdmnistrador = createSelector(
    getUsuariosFeatureState,
    (state: UsuarioState) => state.usuarios.filter(u => u.perfil?.toLowerCase() === 'administrador')
  );