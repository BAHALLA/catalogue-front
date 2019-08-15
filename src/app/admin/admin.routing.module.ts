import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {AdminCategoryComponent} from "./admin-category/admin-category.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {NewCategoryComponent} from "./new-category/new-category.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'categories'},
      {
        path: 'categories',
        children: [
          { path: '', redirectTo: 'listCategories', pathMatch: 'full'},
          { path: 'listCategories', component: AdminCategoryComponent, data: { title: 'Categories'}},
          { path: 'new-category', component: NewCategoryComponent, data: { title: 'New Category'}}
        ]
      },
      {
        path: 'users',
          children: [
            { path: '', redirectTo: 'usersList', pathMatch: 'full'},
            { path: 'usersList', component: AdminUsersComponent, data: {title: 'Users'} }
          ]
      }
    ]
  }
];
export const routing = RouterModule.forChild(routes);
