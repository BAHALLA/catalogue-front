import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {routing} from "./admin.routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    routing,
    RouterModule
  ]
})
export class AdminModule { }
