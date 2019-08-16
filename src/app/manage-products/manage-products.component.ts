import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products : any;
  currentPage: number;
  totalElements: number;
  nextPageUrl: string;
  totalPages: number;
  private size: number;
  arrayPages: any;
  constructor(private prodService: ProductsService) { }

  ngOnInit() {
    this.prodService.getAllProducts().subscribe( data => {
         this.totalElements = data['_embedded'].products.length;
          this.loadProducts();
    },
      error => {
        console.log(error);
      });

  }

  loadProducts(size : number=5, page: number=0) {
    this.prodService.getProducts(size, page).subscribe(
      data => {
        this.products = data;
        this.initParams(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  initParams (data) {
    this.currentPage = this.prodService.currentPage;
    this.size = this.prodService.currentSize;
    this.totalPages = this.totalElements / this.size;
    this.arrayPages = new Array(this.totalPages);
  }

  onNewPage(j: number) {
    this.loadProducts(5, j);
  }
}
