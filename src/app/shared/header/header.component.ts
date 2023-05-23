import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  public usuario: Usuario;
  public isLogin!: boolean;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    
    this.isLogin = localStorage.getItem('token') != null;
  }

  logout() {
    this.usuarioService.logout();
  }
}
