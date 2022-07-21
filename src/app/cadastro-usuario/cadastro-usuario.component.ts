import { UsuarioService } from './../services/usuario.service';
import { UsuarioModel } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store';
import * as fromUsuarioActions from '../store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.less']
})
export class CadastroUsuarioComponent implements OnInit {
  public usuario: UsuarioModel = {id: 0, nome: '', idade: 0, perfil: ''};
  constructor(
    private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  adicionarUsuario(){
    if(this.usuario.id== 0){
      this.store.dispatch(fromUsuarioActions.CreateUsuario({payload: this.usuario}));
    }else{
      this.store.dispatch(fromUsuarioActions.UpdateUsuario({payload: this.usuario}));
    }
  }

}
