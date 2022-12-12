import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
  constructor(private formBuilder: FormBuilder,
              private modalService:NgbModal) { }

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

  private buildForm(): void {
    this.formRecipe = new FormGroup({
      nameRecipe: new FormControl(this.register.nameRecipe, [Validators.required]),
      category: new FormControl(this.register.category, [Validators.required]),
      dificult: new FormControl(this.register.dificult, [Validators.required]),
      nameIngredients: new FormControl(this.register.nameIngredient, [Validators.required]),
      cantidad: new FormControl(this.register.cantidad, [Validators.required]),
      unidadIngre: new FormControl(this.register.unidadIngre, [Validators.required]),
      timeRecipe: new FormControl(this.register.timeRecipe, [Validators.required]),
      unidad: new FormControl(this.register.unidad, [Validators.required]),
      cantidadPersonas: new FormControl(this.register.cantidadPersonas, [Validators.required]),
      steps: new FormControl(this.register.steps, [Validators.required])
    });
  }

  onRegister(){
    console.log(this.register);
  }

  //Funcionalidad Botón cerrar
  public close(): void {
    this.modalService.dismissAll();
  }

}
