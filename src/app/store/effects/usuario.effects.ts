import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from "../actions";
import { of, tap } from "rxjs";
import {catchError, map, mergeMap} from 'rxjs/operators'
import { UsuarioService } from "../../services/usuario.service";

@Injectable()
export class UsuarioEffects{

  constructor(private actions$: Actions, private usuariosService: UsuarioService){}


  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      //tap( data => console.log(data)),
      mergeMap(
        (action) => this.usuariosService.getUserById(action.id).pipe(
          //tap( data => console.log('getUsers',data))
          map(usuario => usuariosActions.cargarUsuarioSuccess({usuario})),
          catchError( err => of(usuariosActions.cargarUsuarioError({payload:err})))
        )
      )
    )
  );

}
