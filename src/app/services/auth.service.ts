import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import User from "../models/user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import user from "../models/user";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject : BehaviorSubject<User>;
 private readonly baseUrl = "http://localhost:8080";
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
  login( data) {
   return this.httpClient.post(this.baseUrl + "/login", data, {observe: 'response'})
      .pipe(map (resp => {
            if(resp.headers.get("Authorization")) {
              const jwtToken =resp.headers.get("Authorization");
              const jwtService =new JwtHelperService();
              const jwtDecoded = jwtService.decodeToken(jwtToken);

              let user: User = new User();
              user.username = jwtDecoded.sub;
              user.token = jwtToken;
              user.role = jwtDecoded.roles;

              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return resp;
      }));

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
