import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
// import swal from 'sweetalert';


import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  register(event: Event): void{
    event.preventDefault();
    if ( this.form.valid ) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        alert('Registro exitoso');
        // swal('Good job!', 'You clicked the button!', 'success');
        this.router.navigate(['/crud']);
      }).catch(() => {
        alert('Registro Fallo');
      });
    }else{
      alert('Registro Fallo');
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
