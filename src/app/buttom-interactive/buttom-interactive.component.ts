import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-buttom-interactive',
  templateUrl: './buttom-interactive.component.html',
  styleUrls: ['./buttom-interactive.component.css']
})
export class ButtomInteractiveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  get ingredientes2(){
    return this.registerForms.get("ingredientes2") as FormArray;
  }
  registerForms = this.formBuilder.group({
    ingredientes2: this.formBuilder.array([])
  })
  ngOnInit(): void {
  }
  agregarIngredientes2(){
    const ingredientes2FormGroup = this.formBuilder.group({
      ingredient: '',
      cantidad: '',
      unitofmeasure: ''
    });
    this.ingredientes2.push(ingredientes2FormGroup);
  }
  removerIngredientes2(indice : number){
    this.ingredientes2.removeAt(indice);

  }


  refresh(){
    this.ingredientes2.controls.splice(0,this.ingredientes2.length);
  }

}
