import { Injectable } from '@angular/core';
import {AdminModule} from "../admin.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn : 'root'
})
export class UserService {
  private readonly baseUrl = "http://localhost:8080";
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllUsers() {
    return this.httpClient.get(this.baseUrl +"/appUsers",
      {headers: new HttpHeaders({"Authorization": this.authService.getCurrentUser.token })});
  }
  getUserById(url) {
    return this.httpClient.get(url);
  }
}
