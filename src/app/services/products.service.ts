import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly baseUrl = "http://localhost:9090";
  currentPage :number;
  currentSize: number;
  constructor(private httpClient: HttpClient) { }

  public getProducts(size: number = 5, page: number= 0){
    this.currentPage = page;
    this.currentSize = size;
    return this.httpClient.get(this.baseUrl + "/products?page=" +page+ "&size="+ size);
  }
  getAllProducts() {
    return this.httpClient.get(this.baseUrl + "/products");
  }
}
