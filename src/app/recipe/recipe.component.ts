import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.formRecipe = this._formBuilder.group({
      recipeName: [],
      ingredients: [],
      unidad:[],
      steps:[],


    });

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

}
