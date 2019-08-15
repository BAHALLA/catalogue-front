import { Injectable } from '@angular/core';
import {AdminModule} from "../admin.module";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})
export class CategoryService {

  private readonly baseUrl = "http://localhost:9090";
  constructor(private httpClient: HttpClient) { }

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
  deleteCategory(id) {

  }
}
