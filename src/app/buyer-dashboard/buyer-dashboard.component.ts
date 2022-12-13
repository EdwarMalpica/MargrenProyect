import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {

  productList:any;

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts(){
    this.productList = [ {
      name: "Tomate chonto",
      price: 1050,
      quantity: 1,
      unidMetric:"Lb",
      finca:"Apave",
      contact:"3217172823"
    }, {
      name: "Ciruelas",
      price: 1500,
      quantity: 1,
      unidMetric:"Lb",
      finca:"Apave",
      contact:"3217172823"
    }, {
      name: "Acelga amarilla",
      price: 2850,
      quantity: 1,
      unidMetric:"Unid",
      finca:"Apave",
      contact:"3217172823"
    }, {
      name: "Aguacate hass",
      price: 4480,
      quantity: 1,
      unidMetric:"Libra",
      finca:"Apave",
      contact:"3217172823"
    }, {
      name: "Ahuyma",
      price: 2500,
      quantity: 1,
      unidMetric:"Lb",
      finca:"Apave",
      contact:"3217172823"
    }, {
      name: "Ajo",
      price: 4800,
      quantity: 200,
      unidMetric:"gr",
      finca:"Apave",
      contact:"3217172823"
    }, {
      name: "Arandanos",
      price: 10000,
      quantity: 250,
      unidMetric:"gr",
      finca:"Apave",
      contact:"3217172823"
    }]
  }
  

  public modifyRoot(index:Number){
    if(index == 0){

    }else{
        this.router.navigate(["/recipesView"])
    }
  }




}
