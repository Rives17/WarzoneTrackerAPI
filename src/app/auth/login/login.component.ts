import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public formSubmitted = false;
  public usuario!: Usuario;

  public loginForm: FormGroup = this.fb.group({
    email: [ localStorage.getItem('email') || '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ],
    remember: [ false ]
  });

  constructor(private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ngZone: NgZone) {
  }

  

  login() {

    this.usuarioService.login(this.loginForm.value)
      .subscribe(resp => {
        console.log(resp);

        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value)
        } else {
          localStorage.removeItem('email')
        }
        if(resp) {
          this.router.navigateByUrl('api/home');

        }

      }, (err) => {
        console.log(err);

        // Swal.fire('Error', err.error.msg, 'error')
      });
  }


  // ngAfterViewInit(): void {
  //   this.googleInit();

  // }

  // googleInit() {

  //   return new Promise<void> ( resolve => {

  //     google.accounts.id.initialize({
  //       client_id: "869468473208-bm3ge9jitdvb1iu5bfak2ir5tnf8h1k4.apps.googleusercontent.com",
  //       callback: (response: any) => this.handleCredentialResponse(response)
  //     });

  //     google.accounts.id.renderButton(
  //       this.googleBtn.nativeElement,
  //       { theme: "outline", size: "large" }  // customization attributes
  //     )

  //     resolve();

  //   })
  // }

  // handleCredentialResponse( response: any) {
  //   // console.log("Encoded JWT ID token: " + response.credential);
  //   this.usuarioService.loginGoogle(response.credential)
  //     .subscribe(resp => {
  //       this.ngZone.run(() => {
  //         this.router.navigateByUrl('/')
  //       })
  //     })
  // }



}
