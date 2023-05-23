import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario/usuario.model';
import { RegisterForm } from '../interfaces/register-form';
import { LoginForm } from '../interfaces/login-form';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: Usuario;

  constructor(private http: HttpClient,
              private router: Router,
              private ngZone: NgZone) { }


  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.usuario.uid || '';
  }

  validarToken(): Observable<boolean> {

  const token = localStorage.getItem('token') || '';

  return this.http.get(`${base_url}/auth/renewLogin`, {
      headers: { 'x-token': token }
    }).pipe(
      map( (resp: any) => {

        const { username, email, img = '', google, role, uid } = resp.usuario;
        console.log(resp);
        
        this.usuario = new Usuario( username, email, '', img, google, role, uid)
        localStorage.setItem('token', resp.token);
        return true
      }),

      catchError( error => {
        console.log(error)
        return of(false) 
      } )
    );
  }

  crearUsuario(formData: RegisterForm) {
    
    return this.http.post(`${base_url}/auth/register`, formData)
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token)
                  })
                )
    
  };

  actualizarPerfil(data: {email: string, username: string}) {

    return this.http.put(`${base_url}/usuarios/${this.uid}`, data, {
      headers: { 'x-token': this.token }
    })
    .pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  login(formData: LoginForm) {
    
    return this.http.post(`${base_url}/auth/login`, formData)
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token)
                  }),
                  catchError( error => of(false))
                )
    
  }

  logout() {
    localStorage.removeItem('token');
  }
  
  
  // loginGoogle( token: string ) {
    
  //   return this.http.post(`${base_url}/login/google`, {token})
  //     .pipe(
  //       tap( (resp: any) => {
  //         localStorage.setItem('token', resp.token)
  //       })
  //     )
  // }

    
    // google.accounts.id.revoke( this.usuario.email, () => {
      
    //   this.ngZone.run(() => {
    //     this.router.navigateByUrl('/login')
    //   })
    // })

  }

