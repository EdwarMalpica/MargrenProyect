import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  formRecipe !: FormGroup
  ingredient = [{
    id: 1,
    descripcion : "manzana de agua"
  },
    {
      id: 2,
      descripcion : "durazno Rey Negro"
    }
  ]
  time = [{
    id: 1,
    descripcion : "segundos"
  },
    {
      id: 2,
      descripcion : "minutos"
    },
    {
      id: 3,
      descripcion : "horas"
    }
  ]
  constructor(private formBuilder: FormBuilder) { }
  get ingredients(){
    return this.registerForms.get("ingredients") as FormArray;
  }
  registerForms = this.formBuilder.group({
    ingredients: this.formBuilder.array([])
  })
  ngOnInit(): void {
    this.formRecipe = this.formBuilder.group({
      recipeName: [],
      unidad:[],
      steps:[],
    });
  }

  addIngredients(){
    const ingredientsFormGroup = this.formBuilder.group({
      ingredient: " ",
      cantidad: " ",
      unitofmeasure: ""
    });
    this.ingredients.push(ingredientsFormGroup);
  }

  removeIngredients(indice:number){
    this.ingredients.removeAt(indice);
  }

  register ={
    nameRecipe: '',
    category: '',
    dificult: '',
    nameIngredient: '',
    cantidad: '',
    timeRecipe: '',
    unidad: '',
    cantidadPersonas: '',
    steps: '',
  }

  onRegister(){
    console.log(this.register);
  }

  refresh(){
    this.ingredients.controls.splice(0,this.ingredients.length);
  }

}
