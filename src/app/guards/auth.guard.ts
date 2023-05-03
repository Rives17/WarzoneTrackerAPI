import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  canActivate(): Observable<boolean> {

    return this.usuarioService.validarToken()
      .pipe(
        tap( isAuth => {
          if (!isAuth) {
            this.router.navigate(['api/login']);
          }
        })
      );
  }
  
}
