import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {routing} from "./admin.routing.module";
import {RouterModule} from "@angular/router";
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import {CategoryService} from "./admin-services/category-service.service";
import {UserService} from "./admin-services/user-service.service";




@NgModule({
  declarations: [AdminComponent, AdminCategoryComponent, AdminUsersComponent],
  imports: [
    CommonModule,
    routing,
    RouterModule
  ],
  providers: []
})
export class AdminModule { }
