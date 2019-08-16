import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../admin-services/category-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  error: any;
  currentCategory: any;
  url: string;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.url = atob(this.activatedRoute.snapshot.params.url);
    console.log(this.url);
    this.categoryService.getCategoryById(this.url).subscribe(data => {
        this.currentCategory = data ;
      },
      error => {
        this.error = error;
      });

  }

  ngOnInit() {
  }

  onEditCategory() {
        this.categoryService.updateCategory(this.url, this.currentCategory).subscribe(data => {
          this.router.navigateByUrl("/admin");
        }, error1 => {
          this.error = error1;
        });
  }

  onCancelUpdate() {
    this.router.navigateByUrl("/admin");
  }
}
