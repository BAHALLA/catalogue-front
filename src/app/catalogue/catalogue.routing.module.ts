import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children : [
      { path: 'products/:url', component: ProductComponent, data: { title: ''}}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
