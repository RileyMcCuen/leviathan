import { AuthService } from './../auth.service';
// tslint:disable: object-literal-key-quotes
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { twoFieldMatch } from 'src/app/shared/validators/two-field-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../shared/style/styles.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authSer: AuthService) {}

  registerForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormGroup(
      {
        'password': new FormControl('', [Validators.required]),
        'confirm': new FormControl('', [Validators.required])
      },
      [twoFieldMatch('password', 'confirm')]
    )
  });

  get email() {
    return this.registerForm.controls.email;
  }

  get passwordGroup() {
    return this.registerForm.controls.password;
  }

  get password() {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return (<FormGroup> this.registerForm.controls.password).controls.password;
  }

  get confirm() {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    return (<FormGroup> this.registerForm.controls.password).controls.confirm;
  }

  ngOnInit() {}

  onSubmit() {
    this.authSer.register(this.email.value, this.password.value);
  }
}
