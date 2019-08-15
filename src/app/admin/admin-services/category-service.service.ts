import { Injectable } from '@angular/core';
import {AdminModule} from "../admin.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn : 'root'
})
export class CategoryService {

  private readonly baseUrl = "http://localhost:9090";

  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }

  getAllCategories() {
    return this.httpClient.get(this.baseUrl + "/categories");
  }
  getCategoryById(id: string) {
    return this.httpClient.get(this.baseUrl + "/categories/"+ id);
  }
  addCategory(data) {

  }
  updateCategory(id) {

  }
  deleteCategory(url) {

      const token = this.authService.getCurrentUser.token;
      const header = new HttpHeaders( {'Authorization': token });
      return this.httpClient.delete(url, {headers: header})
  }
}
