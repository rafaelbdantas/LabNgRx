import { AppState } from './../store/app.store';
import { UsuarioModel } from './../models/usuario.model';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


import * as fromUsuarioActions from '../store/usuarios/usuarios.actions';
import * as fromUsuarioSelectors from '../store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.less']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios$: Observable<Array<UsuarioModel>> = this.store.select(fromUsuarioSelectors.getUsuarios);
  usuario$: Observable<UsuarioModel | null> = this.store.select(fromUsuarioSelectors.getUsuario);

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsuarioActions.LoadUsuarios());
  }

  editar(id: number): void {
    this.store.dispatch(fromUsuarioActions.LoadUsuario({payload: id}));
  }
}
