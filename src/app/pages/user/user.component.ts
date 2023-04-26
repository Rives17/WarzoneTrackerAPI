import { Component } from '@angular/core';

import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public usuario: Usuario

  constructor(private usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario;
  }
}
