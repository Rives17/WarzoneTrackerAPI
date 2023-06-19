import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  public usuario: Usuario;
  public isLogin!: boolean;

  constructor(private usuarioService: UsuarioService,
              private router: Router) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {

    this.isLogin = localStorage.getItem('token') != null;
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl('/api/login')
  }
}
