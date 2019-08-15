import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Category from "../models/category";
import Product from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  readonly baseUrl = "http://localhost:9090";
  constructor(private httClient: HttpClient) { }

  getAllCategories() {
    return this.httClient.get<Category[]>(this.baseUrl + "/categories");
  }

  getProductsByCategory (url : string) {
    return this.httClient.get<Product[]>(url);
  }
  getCategoryById(id: string) {
    return this.httClient.get(this.baseUrl + "/categories/"+ id);
  }
  getAllProducts() {
      return this.httClient.get(this.baseUrl + "/products");
  }

}
