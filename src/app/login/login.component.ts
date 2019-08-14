import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {pipe} from "rxjs";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  error: undefined;
  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(value: any) {
    this.isLoading = true;
   this.authService.login(value)
     .pipe(first())
     .subscribe(resp => {
        this.router.navigate(['/admin']);
     },
       error1 => {
        this.error = error1;
         this.isLoading = false;
       }
   );
  }
}
