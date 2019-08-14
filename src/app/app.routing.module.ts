import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGardService} from "./services/auth-gard.service";
import {Role} from "./models/role";

const routes: Routes = [
  { path: '', redirectTo: 'catalogue', pathMatch: 'full'},
  { path: 'catalogue', loadChildren: () => import('../app/catalogue/catalogue.module').then(m => m.CatalogueModule) },
  { path: 'login', component: LoginComponent, data: {title: 'Sign In'} },
  { path: 'register', component: RegisterComponent , data: {title: 'Sign Up'}},
  { path: 'admin', canActivate : [AuthGardService], data: {role:Role.ADMIN}, loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
