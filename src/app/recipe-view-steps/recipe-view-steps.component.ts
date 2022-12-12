import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-view-steps',
  templateUrl: './recipe-view-steps.component.html',
  styleUrls: ['./recipe-view-steps.component.css']
})
export class RecipeViewStepsComponent implements OnInit {

  recipeList: any;

  constructor() {
    this.recipeList = [ {
      nameRecipe:"Albóndigas de brócoli",
      ingredientes: [
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
    }]
  }

  ngOnInit(): void {
  }

}
