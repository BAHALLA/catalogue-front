import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../admin-services/category-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  private error: string;
  constructor(private catService: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  onSaveCategory(value: any) {

    this.catService.addCategory(value).subscribe(
      data => {
        this.router.navigate(['/admin']);
      },
      error => {
        this.error = error;
      }
    );
  }
}
