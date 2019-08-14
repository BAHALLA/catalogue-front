import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  isLogged: boolean = false;

  constructor(private authService: AuthService,private router: Router) {
    router.events.subscribe( event => {
      if(event instanceof NavigationEnd) {
        this.setIsAdmin();
        this.setIsLogged();
      }
    })
  }

  ngOnInit() {
  }

  setIsAdmin() {
    const currentUser = this.authService.getCurrentUser;
    if(currentUser && currentUser.role.indexOf("ADMIN") !== -1) {
      this.isAdmin = true;
    }
    else {
      this.isAdmin =false;
    }
  }

  setIsLogged() {
    const currentUser = this.authService.getCurrentUser;
    if(currentUser) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
