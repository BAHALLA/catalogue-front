import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../admin-services/category-service.service";

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe( data => {
      this.categories = data;
    },
      error => {
      console.log(error);
      });
  }

}
