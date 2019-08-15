import { Injectable } from '@angular/core';
import {AdminModule} from "../admin.module";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})
export class UserService {
  private readonly baseUrl = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(this.baseUrl +"/users");
  }
  getUserById(id) {
    return this.httpClient.get(this.baseUrl + "/users/"+ id);
  }
}
