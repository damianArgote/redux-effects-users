import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GetUsuarios } from '../dtos/get-usaurios-response.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}/users?page=2`)
    .pipe(
      map((resp) => (resp as GetUsuarios).data)
    );
  }

}
