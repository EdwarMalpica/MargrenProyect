import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe} from "../../models/entities/recipe.interface";
import { RecipeComponent} from "../../recipe/recipe.component";


@Component({
  selector: 'app-dashboar-recipes',
  templateUrl: './dashboar-recipes.component.html',
  styleUrls: ['./dashboar-recipes.component.css']
})
export class DashboarRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
