import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //variables
  formProducts !: FormGroup
  productCategory = [{
    id: 1,
    descripcion : "manzana de agua"
  },
  {
    id: 2,
    descripcion : "durazno Rey Negro"
  }
]

  constructor(private _formBuilder: FormBuilder) { }

  //campos del form --> métodos
  ngOnInit(): void {
    this.formProducts = this._formBuilder.group({
      productName: [],
      products: [],


    });
  }

  register ={
    nameProduct: '',
    typeProduct: '',
    precio: '',
    cantidad: '',
    unidadMedida: '',
  }

  onRegister(){
    console.log(this.register);
  }


}
