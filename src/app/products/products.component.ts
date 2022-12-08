import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Product } from '../models/entities/product.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() public product: Product;

  //variables --> en el select
  formProducts!: FormGroup

  
  productCategory = [{
    id: 1,
    descripcion: "Manzana de agua"
  },
  {
    id: 2,
    descripcion: "Durazno Rey Negro"
  },
  {
    id: 3,
    descripcion: "Fresa"
  },
  {
    id: 4,
    descripcion: "Lechuga"
  },
  {
    id: 5,
    descripcion: "Aguacate"
  },
  {
    id: 6,
    descripcion: "Papa"
  }
  ]

  selectCategory: string[]=[]

  constructor(private _formBuilder: FormBuilder,
    private modalService: NgbModal,
    private productsService: ProductsService) {
  }

  //Funcionalidad Botón cerrar
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
    this.productCategory
  }

  register = {
    nameProduct: '',
    typeProduct: '',
    description: '',
    precio: '',
    cantidad: '',
    unidadMedida: '',
  }

  //Para el back
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
