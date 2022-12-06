import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Product } from '../models/entities/product.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() public product: Product;

  //variables
  formProducts!: FormGroup
  productCategory = [{
    id: 1,
    descripcion: "manzana de agua"
  },
  {
    id: 2,
    descripcion: "durazno Rey Negro"
  }
  ]

  constructor(private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private productsService: ProductsService) {
  }

  public close(): void {
    this.modalService.dismissAll();
  }

  private buildForm(): void {
    this.formProducts = new FormGroup({
      name: new FormControl(this.product?.name, [Validators.required]),
      type: new FormControl(this.product?.categoryId, [Validators.required]),
      units: new FormControl(this.product?.unit, [Validators.required]),
      price: new FormControl(this.product?.price, [Validators.required]),
      amount: new FormControl(this.product?.amount, [Validators.required])
    });
  }

  //campos del form --> métodos
  ngOnInit(): void {
    this.buildForm();
  }

  register = {
    nameProduct: '',
    typeProduct: '',
    precio: '',
    cantidad: '',
    unidadMedida: '',
  }

  onRegister() {
    if (this.formProducts.valid) {
      let product: Product = this.formProducts.value;
      console.log(product);
      // if (this.product) {
      //   product.id = this.product.id;
      //   this.productsService.updateProduct(product).subscribe((product: Product) => {
      //     console.log(product);
      //   });
      // } else {
      //   this.productsService.addProduct(product).subscribe((product: Product) => {
      //     console.log(product);
      //   });
      // }
      this.modalService.dismissAll();
    }
  }


}
