import { Component, OnInit } from '@angular/core';

import Category from "../../models/category";
import {CatalogueService} from "../../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any;
  currentCategory: any;
  constructor(private catService: CatalogueService, private router: Router) { }

  ngOnInit() {
    this.catService.getCategoryById("C1").subscribe( data => {
      this.currentCategory = data;
      this.getAllProductsOfCategory(this.currentCategory);
    });
    this.catService.getAllCategories().subscribe( data => {
      this.categories = data;
    }, error => {
      console.log(error);
    });
  }

  getAllProductsOfCategory(c: any) {
      this.currentCategory = c;
      this.router.navigateByUrl("/catalogue/products/"+btoa(c._links.products.href));
  }
}
