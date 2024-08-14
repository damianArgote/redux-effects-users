import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetUsuarios } from '../dtos/get-usaurios-response.dto';
import { GetUsuarioResponseDto } from '../dtos/get-usuario-response.dto';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.url}/users?page=2&delay=3`)
    .pipe(
      map((resp) => (resp as GetUsuarios).data)
    );
  }


  getUserById(id: string): Observable<any>{
    return this.http.get(`${this.url}/users/${id}`)
    .pipe(
      map((resp) => (resp as GetUsuarioResponseDto).data)
    );
  }

}
