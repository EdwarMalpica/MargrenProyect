import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/entities/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css']
})
export class DashboardProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    // this.productsService.getProducts().subscribe((products: Product[]) => {
    //   this.products = products;
    // });
    this.products = [
      { id: 1, name: "Producto 1" },
      { id: 2, name: "Producto 2" },
      { id: 3, name: "Producto 3" },
      { id: 4, name: "Producto 4" },
      { id: 5, name: "Producto 5" },
      { id: 6, name: "Producto 6" },
      { id: 7, name: "Producto 7" },
    ];
  }

}