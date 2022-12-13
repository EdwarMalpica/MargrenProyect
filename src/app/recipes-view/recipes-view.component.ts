import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Recipe} from "../models/entities/recipe.model";
import { RecipeServiceService } from '../services/recipe-service.service';

@Component({
  selector: 'app-recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css']
})
export class RecipesViewComponent implements OnInit {

  public filteredUser: Recipe[] = [];
  public searchText: string = "";

  categoryList: any;
  dificultyList: any;
  recipeList: Recipe[];
  recipeListAux:Recipe[]

  constructor(private router:Router, private service: RecipeServiceService) {

    this.categoryList = [ {
      id:1,
      path: "assets/iconDesayuno.png",
      category: "Desayuno",
      quantity: 6
    }, {
      id:2,
      path: "assets/iconAlmuerzo.png",
      category: "Almuerzo",
      quantity: 23
    }, {
      id:3,
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

    this.recipeList = this.service.getListRecipes();
    this.recipeListAux = this.recipeList;
  }

  public filterType(categoryId :  Number): void {
    this.recipeListAux = [];
    for (let i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].categoryId == categoryId) {
        this.recipeListAux.push(this.recipeList[i]);
      }
    }
  }

  public selectRecipeStep(idAux:number){
    for (let i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].id == idAux ) {
        this.router.navigate(["/recipeViewStep", this.recipeList[i].id])

      }
    }
  }

  ngOnInit(): void {
  }

}
