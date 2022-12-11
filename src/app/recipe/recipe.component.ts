import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  formRecipe !: FormGroup
  ingredientes = [{
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

  ngOnInit(): void {
    this.formRecipe = this.formBuilder.group({
      nameRecipe: [],
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
    unidadIngre : '',
    timeRecipe: '',
    unidad: '',
    cantidadPersonas: '',
    steps: '',
  }

  onRegister(){
    console.log(this.register);
  }

}
