import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/entities/product.interface';
import { ProductsComponent } from 'src/app/products/products.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  public searchText: string = "";
  public filteredProducts: Product[] = [];
  public products: Product[] = [];

  constructor(private modalService: NgbModal,
    private productsService: ProductsService) {
  }

  //CRUD

  public filterProducts(): void {
    const text: string = this.searchText.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(text));
  }

  public openProductCreator(): void {
    this.modalService.open(ProductsComponent, { centered: true, scrollable: true });
  }

  public openProductEditor(product: Product): void {
    const modalRef = this.modalService.open(ProductsComponent, { centered: true, scrollable: true });
    modalRef.componentInstance.product = product;
  }

  public removeProduct(product: Product, modal: any): void {
    const modalRef = this.modalService.open(modal, { centered: true, scrollable: true });
    modalRef.result.then((result: boolean) => {
      if (result) {
        // this.productsService.removeProduct(product.id).subscribe(() => {
        //   this.loadProducts();
        // });
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id == product.id) {
            this.products.splice(i, 1);
            break;
          }
        }
        this.filteredProducts = this.products.filter(product => product.name.includes(""));
        this.searchText = "";
      }
    });
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    // this.productsService.getProducts().subscribe((products: Product[]) => {
    //   this.products = products;
    // });
    this.products = [
      { id: 1, name: "Producto 1", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 2, name: "Producto 2", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 3, name: "Producto 3", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 4, name: "Producto 4", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 5, name: "Producto 5", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 6, name: "Producto 6", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 7, name: "Producto 7", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 8, name: "Producto 8", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 9, name: "Producto 9", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 10, name: "Producto 10" }
    ];
    this.filteredProducts = this.products.filter(product => product.name.includes(""));
  }

  //funcionalidades de los card
  //función calcular precio
  calculatenetPrice(){
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].price){

        sum += this.products[i].price;
      }

    }return sum;
  }



}
