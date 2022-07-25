import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarioAdministradorComponent } from './lista-usuario-administrador.component';

describe('ListaUsuarioAdministradorComponent', () => {
  let component: ListaUsuarioAdministradorComponent;
  let fixture: ComponentFixture<ListaUsuarioAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuarioAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUsuarioAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
