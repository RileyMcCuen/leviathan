import { AuthService } from './../auth.service';
// tslint:disable: object-literal-key-quotes
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../shared/style/styles.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSer: AuthService) { }

  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required])
  });

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }


  ngOnInit() {}

  onSubmit() {
    this.authSer.login(this.email.value, this.password.value);
  }

}
