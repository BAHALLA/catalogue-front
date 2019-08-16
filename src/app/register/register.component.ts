import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FromEventTarget} from "rxjs/internal/observable/fromEvent";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: any;

  registerForm: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.
    group({
      username: ['', [Validators.required, Validators.min(4)]],
      password: ['', [Validators.required]],
      confirmedPassword: ['', [Validators.required]]
    });
  }
  onSignUp() {
    const username = this.registerForm.get(['username']).value;
    const password = this.registerForm.get(['password']).value;
    const confirmedPassword = this.registerForm.get(['confirmedPassword']).value;

   this.authService.signUpUser(username, password, confirmedPassword).subscribe(
     data => {
       console.log(data);
       this.router.navigateByUrl("/login");
     },
     error => {
       this.error = error.error.message;
     }
   );
  }
}
