import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/core/models/usuario.model';

import { UploadService } from 'src/app/services/upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public usuario: Usuario;
  public usuarioCopy!: Usuario;
  public uploadFile!: File;
  public imgTemp: any = '';


  constructor(private usuarioService: UsuarioService,
              private uploadService: UploadService) {

    this.usuario = usuarioService.usuario;
  }
  ngOnInit(): void {
    this.usuarioService.getUser()
    .subscribe((resp: any) => {
      this.usuarioCopy = resp.usuario
    })

  }

  uploadImg() {
    this.uploadService.uploadFile(this.uploadFile, this.usuarioCopy.uid!)
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

  deleteUser(usuarioCopy: Usuario) {

    this.usuarioService.deleteUser(usuarioCopy).subscribe(
      resp => console.log(resp)
    )
  }

}
