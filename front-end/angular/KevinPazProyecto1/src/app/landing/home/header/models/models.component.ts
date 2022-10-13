import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/landing/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      prinom: new FormControl('', Validators.required),
      priape: new FormControl('', Validators.required),
      nombreusu: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { Validators: this.checkPasswords() });
  }

  registerFormGet(prinom: string) {
    return this.registerForm.get(prinom);
  }

  async registerUser() {
    const { email, password, prinom, priape, nombreusu } = this.registerForm.value;
    
    try {
      const user: any = await this.authService.registerUser(email, password, prinom, priape, nombreusu);
      
      if (user.message && user.code)
      {
        throw user;
      } else 
      {
        this.router.navigate(['verificar-email']);
      }
    } catch (error: any) {
      Swal.fire({
        title: '¡Error!',
        text: this.authService.authErrors[error.code],
        icon: 'error',
        confirmButtonColor: '#3459e6',
        confirmButtonText: 'Cerrar'
      })
    }
  }
  
  checkPasswords() {
    return (FormGroup: FormGroup) => {
      const passwordControl = FormGroup.controls['password'];
      const confirmPasswordControl = FormGroup.controls['confirmPassword'];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors["passwordMismatch"]) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
