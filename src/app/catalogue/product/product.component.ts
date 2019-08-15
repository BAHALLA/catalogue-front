import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import Product from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  constructor(private catService: CatalogueService, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe( evnt => {
      if(evnt instanceof NavigationEnd) {
        const url = atob(this.route.snapshot.params.url);
        this.getProducts(url);
      }
    });

  }

  ngOnInit() {
  }

  getProducts(url) {
    this.catService.getProductsByCategory(url).subscribe( data => {
      this.products = data;
    },
      error => {
      console.log(error);
      });
  }

}
