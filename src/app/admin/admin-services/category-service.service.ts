import { Injectable } from '@angular/core';
import {AdminModule} from "../admin.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn : 'root'
})
export class CategoryService {

  private readonly baseUrl = "http://localhost:9090";
  private header: HttpHeaders;

  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }

  getAllCategories() {
    return this.httpClient.get(this.baseUrl + "/categories");
  }
  getCategoryById(url) {
    return this.httpClient.get(url);
  }
  addCategory(data) {
    this.loadToken();
    return this.httpClient.post(this.baseUrl +"/categories", data, {headers: this.header});
  }
  updateCategory(url , data) {
    this.loadToken();
    return this.httpClient.put(url, data, {headers: this.header});
  }

  deleteCategory(url) {
     this.loadToken();
      return this.httpClient.delete(url, {headers: this.header})
  }

  loadToken() {
    const token = this.authService.getCurrentUser.token;
    this.header = new HttpHeaders( {'Authorization': token });
  }
}
