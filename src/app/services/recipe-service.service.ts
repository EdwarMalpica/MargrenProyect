import { Injectable } from '@angular/core';
import { Recipe } from '../models/entities/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

 recipeList = [ {
    id:1,
    nameRecipe:"Albóndigas de brócoli",
    categoryId:1,
    dificult:1,
    ingredients: [
      { name: 'brocoli', quantity: 500, metric:"g"},
      { name: 'pan moligo', quantity: 200 ,metric:"g"},
      { name: 'cebolla morada', quantity: 2.5, metric:"unid"},
    ],
    time: [
      { value: 55, metricTime:"min"},
    ],
    quantityPerson: 2,
    steps: [
      { idStep: 1, description: "limpiar el brócoli, cortarle el tallo, separar las flores y ponemos por 5 minutos en una olla de agua hirviendo con sal. Al cabo de este tiempo le retiramos del agua y dejamos escurrir por unos minutos."},
      { idStep: 2, description: "Picamos finamente la cebolla, el perejil, el queso y el brócoli"},
      { idStep: 3, description: "Picamos finamente la cebolla, el perejil, el queso y el brócoli"},
    ]
  },{
    id:2,
    nameRecipe:"Pan molido",
    categoryId:2,
    dificult:2,
    ingredients: [
      { name: 'br', quantity: 500, metric:"g"},
      { name: 'pgo', quantity: 200 ,metric:"g"},
      { name: 'cada', quantity: 2.5, metric:"unid"},
    ],
    time: [
      { value: 100, metricTime:"s"},
    ],
    quantityPerson: 2,
    steps: [
      { idStep: 1, description: "lnemos por 5 minutos en una olla de agua hirviendo con sal. Al cabo de este tiempo le retiramos del agua y dejamos escurrir por unos minutos."},
      { idStep: 2, description: "a cebolla, el perejil, el queso y el brócoli"},
      { idStep: 3, description: "Picamos finamente la cebel queso y el brócoli"},
    ]
  }]


  constructor() { }

   public getListRecipes():Recipe[]{
    return this.recipeList;
   }

   public getRecipeById(id: number):Recipe{

      for (let index = 0; index < this.recipeList.length; index++) {
        if(this.recipeList[index].id == id){
          return this.recipeList[index];
        }}
     return null;
    }
   
}
