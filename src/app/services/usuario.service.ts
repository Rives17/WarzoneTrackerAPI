import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Usuario } from '../core/models/usuario.model';

import { RegisterForm } from '../interfaces/register-form';
import { LoginForm } from '../interfaces/login-form';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: Usuario;

  constructor(private http: HttpClient) { }


  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.usuario.uid || '';
  }

  validarToken(): Observable<boolean> {

    return this.http.get(`${base_url}/auth/renewLogin`, {
      headers: { 'x-token': this.token }
    }).pipe(
      map((resp: any) => {

        const { username, email, img = '', role, uid } = resp.usuario;

        this.usuario = new Usuario(username, email, '', img, role, uid)
        localStorage.setItem('token', resp.token);
        return true
      }),

      catchError(error => {
        console.log(error)
        return of(false)
      })
    );
  }

  crearUsuario(formData: RegisterForm) {

    return this.http.post(`${base_url}/auth/register`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )

  };


  login(formData: LoginForm) {

    return this.http.post(`${base_url}/auth/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        }),
        catchError(error => of(false))
      )

  }

  logout() {
    localStorage.removeItem('token');
  }

  getUser() {
    const id = this.usuario.uid

    return this.http.get(`${base_url}/usuarios/${id}`, {
      headers: { 'x-token': this.token }
    })
  }

  editUser(id: string) {

    return this.http.put(`${base_url}/usuarios/${id}`, {
      headers: { 'x-token': this.token }
    })
  }

  deleteUser(usuario: Usuario) {
    const id = usuario.uid

    return this.http.delete(`${base_url}/usuarios/${id}`, {
      headers: { 'x-token': this.token }
    })
  }

}

