import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';
import { AppState } from '../store/app.store';
import * as fromUsuarioActions from '../store/usuarios/usuarios.actions';
import * as fromUsuarioSelectors from '../store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-usuario-administrador',
  templateUrl: './lista-usuario-administrador.component.html',
  styleUrls: ['./lista-usuario-administrador.component.less']
})
export class ListaUsuarioAdministradorComponent implements OnInit {
  usuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelectors.getUsuariosAdmnistrador)
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
