import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  usuarios:Usuario[] =[];
  loading:boolean=false;
  error:any;

  constructor(private store:Store<AppState>){}


  ngOnInit(): void {
    //this.usaurioService.getUsers().subscribe((usuarios) => this.usuarios = usuarios)
    this.store.select('usuarios').subscribe( ({users,loading,error}) => {
      this.usuarios= users;
      this.error = error;
      this.loading = loading;
    })
    this.store.dispatch(cargarUsuarios())
  }
}
