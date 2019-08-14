import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
