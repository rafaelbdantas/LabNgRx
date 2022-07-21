import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from './../../services/usuario.service';
import * as fromUsuarioActions from '../usuarios/usuarios.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.usuariosTypeAction.LOAD_USUARIOS),
      exhaustMap(() =>
        this.usuarioService.getUsuarios().pipe(
          map(
            (payload) => fromUsuarioActions.LoadUsuariosSuccess({ payload }),
            catchError((error) =>
              of(fromUsuarioActions.LoadUsuariosFail({ error }))
            )
          )
        )
      )
    )
  );

  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.usuariosTypeAction.LOAD_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.getUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuarioActions.LoadUsuarioSuccess({ payload }),
            catchError((error) =>
              of(fromUsuarioActions.LoadUsuariosFail({ error }))
            )
          )
        )
      )
    )
  );

  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.usuariosTypeAction.CREATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.addUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuarioActions.CreateUsuarioSuccess({ payload }),
            catchError((error) =>
              of(fromUsuarioActions.CreateUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.usuariosTypeAction.UPDATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.updateUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuarioActions.UpdateUsuarioSuccess({ payload }),
            catchError((error) =>
              of(fromUsuarioActions.UpdateUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.usuariosTypeAction.DELETE_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.deleteUsuario(record.payload).pipe(
          map(
            () => fromUsuarioActions.DeleteUsuarioSuccess({ payload: record.payload }),
            catchError((error) =>
              of(fromUsuarioActions.DeleteUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );
}
