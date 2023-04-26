import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public formSubmitted = false;

  public loginForm: FormGroup = this.fb.group({
    email: [ localStorage.getItem('email') || '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ],
    remember: [ false ]
  });


  public registerForm = this.fb.group({
    username: ['Alex', Validators.required],
    email: ['alex@mail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terminos: [true, Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')
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

        this.router.navigateByUrl('api/user');

      }, (err) => {
        console.log(err);

        // Swal.fire('Error', err.error.msg, 'error')
      });
  }

  crearusuario () {
    this.formSubmitted = true
    console.log(this.registerForm.value);

    if(this.registerForm.invalid) {
      return;
    }

    //Realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
        .subscribe( resp => {
          this.router.navigateByUrl('home')
          console.log(resp)
          
        }, (err) => {
          console.log(err);
          
          // Swal.fire('Error', err.error.msg, 'error')
        });
    
  }

  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }

  invalidPassword() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    }else {
      return false
    }

  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1: string, pass2: string) {
    
    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if(pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null)
      }else {
        pass2Control?.setErrors({noEqual: true})
      }
    }
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
