import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css']
})
export class RecipesViewComponent implements OnInit {

  categoryList: any;
  dificultyList: any;
  recipeList: any;

  constructor() {
    this.categoryList = [ {
      path: "assets/iconDesayuno.png",
      category: "Desayuno",
      quantity: 6
    }, {
      path: "assets/iconAlmuerzo.png",
      category: "Almuerzo",
      quantity: 23
    }, {
      path: "assets/iconCena.png",
      category: "Cena",
      quantity: 12
    }]
   
    this.dificultyList = [ {
      dificulty: "Fácil",
    }, {
      dificulty: "Media",
    }, {
      dificulty: "Dificil"
    }]

    this.recipeList = [{
      nameRecipe:"Albondigas de brocoli",
    },{
      nameRecipe:"Rollos de lechuga romana"
    },{
      nameRecipe:"Creama de calabaza"
    },{
      nameRecipe:"Aguacates rellenos"
    },{
      nameRecipe:"Melocotones rellenos"
    }]
  }

  ngOnInit(): void {
  }

}
