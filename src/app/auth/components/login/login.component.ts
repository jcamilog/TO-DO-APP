import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;

  constructor(
    private roter: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  login(event: Event): void{
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.roter.navigate(['crud']);
      }).catch(() => {
        alert('Contraseña o correo incorrecto');
      });
    }else{
      alert('Contraseña o correo incorrecto');
    }
  }
  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
