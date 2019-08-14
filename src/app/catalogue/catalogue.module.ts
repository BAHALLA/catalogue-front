import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {routing} from "./catalogue.routing.module";
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [IndexComponent, ProductComponent, CategoryComponent],
  imports: [
    CommonModule,
    routing,
    RouterModule
  ]
})
export class CatalogueModule { }
