import { Component, OnInit } from '@angular/core';

import  Swal  from 'sweetalert2';

import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UploadService } from 'src/app/services/upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public usuario: Usuario;
  public uploadFile!: File;
  public imgTemp: any = '';
  public perfilForm!: FormGroup;




  constructor(private usuarioService: UsuarioService,
              private uploadService: UploadService,
              private fb: FormBuilder) {

    this.usuario = usuarioService.usuario;
  }
  ngOnInit(): void {

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
