import { AppState } from './../store/app.store';
import { UsuarioModel } from './../models/usuario.model';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';


import * as fromUsuarioActions from '../store/usuarios/usuarios.actions';
import * as fromUsuarioSelectors from '../store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios$: Observable<Array<UsuarioModel>> = this.store.select(fromUsuarioSelectors.getUsuarios);
  usuario$!: Observable<UsuarioModel | undefined>;

  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsuarioActions.LoadUsuarios());
  }

  editar(id: number): void {
    // this.store.dispatch(fromUsuarioActions.LoadUsuario({payload: id}));
   this.usuario$  =  this.store.pipe(
      select(fromUsuarioSelectors.obterUsuario({id: id})),
      filter(usuario => !!usuario)
    )
  }

  excluir(id: number): void {
    this.store.dispatch(fromUsuarioActions.DeleteUsuario({payload: id}));
  }

  editarUsuario(usuario: UsuarioModel): void {
    this.store.dispatch(fromUsuarioActions.UpdateUsuario({payload: usuario}));
  }
}
