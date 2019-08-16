import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../admin-services/category-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories: any;
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.onGetCategories();
  }

  onGetCategories() {
    this.categoryService.getAllCategories().subscribe( data => {
        this.categories = data;
      },
      error => {
        console.log(error);
      });
  }

  onDeleteCategory(c: any) {

    let cn = confirm("Are you sure deleting this category ?");
    if(!cn) return;
    this.categoryService.deleteCategory(c._links.self.href).subscribe(
      data => {
        this.onGetCategories();
      }, error => {
        console.log(error);
      }
    );

  }

  onEditCategory(c: any) {
    this.router.navigateByUrl("/admin/update-category/"+ btoa(c._links.self.href));
  }

  onNewCategory() {
    this.router.navigate(['/admin/new-category']);
  }
}
