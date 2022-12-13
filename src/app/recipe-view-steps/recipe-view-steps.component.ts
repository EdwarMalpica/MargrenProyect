import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/entities/recipe.model';
import { RecipeServiceService } from '../services/recipe-service.service';

@Component({
  selector: 'app-recipe-view-steps',
  templateUrl: './recipe-view-steps.component.html',
  styleUrls: ['./recipe-view-steps.component.css']
})
export class RecipeViewStepsComponent implements OnInit {

  
  recipe: Recipe;

  constructor(private router:Router,private routerActivated:ActivatedRoute,private service: RecipeServiceService) {

  }

  private loadRecipes(): void {
    this.recipe = this.service.getRecipeById(this.routerActivated.snapshot.params["id"]);

  }

  ngOnInit(): void {
    this.loadRecipes();
  }

}
