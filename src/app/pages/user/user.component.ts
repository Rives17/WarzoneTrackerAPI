import { Component } from '@angular/core';

import  Swal  from 'sweetalert2';

import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UploadService } from 'src/app/services/upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  public usuario: Usuario;
  public uploadFile!: File;
  public imgTemp: any = '';

  constructor(private usuarioService: UsuarioService,
              private uploadService: UploadService) {

    this.usuario = usuarioService.usuario;
  }

  uploadImg() {
    console.log(this.usuario.uid);
    this.uploadService.uploadFile(this.uploadFile, this.usuario.uid!)
      .then( img => {
        this.usuario.img = img;
        Swal.fire('Bien!', 'Imagen actualizada', 'success');

      }).catch( err => {
        Swal.fire('Ooops!', 'No se ha podido actualizar la imagen', 'error')
      })
  }

  changeImg(file: File) {
    this.uploadFile = file;

    if(!file) {
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result
    }
    return
  }

}
