import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  usuarios:Usuario[] =[];

  constructor(public usaurioService: UsuarioService){}


  ngOnInit(): void {
    this.usaurioService.getUsers().subscribe((usuarios) => this.usuarios = usuarios
    )

  }
}
