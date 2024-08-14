import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from "../actions";
import { of, tap } from "rxjs";
import {catchError, map, mergeMap} from 'rxjs/operators'
import { UsuarioService } from "../../services/usuario.service";

@Injectable()
export class UsuariosEffects{

  constructor(private actions$: Actions, private usuariosService: UsuarioService){}


  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      //tap( data => console.log(data)),
      mergeMap(
        () => this.usuariosService.getUsers().pipe(
          //tap( data => console.log('getUsers',data))
          map(usuarios => usuariosActions.cargarUsuariosSuccess({usuarios})),
          catchError( err => of(usuariosActions.cargarUsuariosError({payload:err})))
        )
      )
    )
  );

}
