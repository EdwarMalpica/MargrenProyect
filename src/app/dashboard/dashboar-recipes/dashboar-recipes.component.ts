import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe} from "../../models/entities/recipe.interface";
import { RecipeComponent} from "../../recipe/recipe.component";
import { RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-dashboar-recipes',
  templateUrl: './dashboar-recipes.component.html',
  styleUrls: ['./dashboar-recipes.component.css']
})
export class DashboarRecipesComponent implements OnInit {

  public searchText: string = "";
  public filteredRecipes: Recipe[] = [];
  public recipes: Recipe[] = [];
  constructor(private modalService: NgbModal,
   private recipeService: RecipeService) { }

  //CRUD

  public filterRecipe(): void {
    const text: string = this.searchText.toLocaleLowerCase();
    this.filteredRecipes = this.recipes.filter(recipes => recipes.nameRecipe.toLowerCase().includes(text));
  }

  public openRecipeCreator(): void {
    this.modalService.open(RecipeComponent, { centered: true, scrollable:false, size: "lg" });
  }

  public openRecipeEditor(recipe: Recipe): void {
    const modalRef = this.modalService.open(RecipeComponent, { centered: true,scrollable:false, size: "lg" })
    modalRef.componentInstance.recipes = recipe;
  }

  public removeRecipe(recipe: Recipe, modal: any): void {
    const modalRef = this.modalService.open(modal, { centered: true, scrollable: true })
    modalRef.result.then((result: boolean) => {
      if (result) {
        for (let i = 0; i < this.recipes.length; i++) {
          if (this.recipes[i].id == recipe.id) {
            this.recipes.splice(i, 1);
            break;
          }
        }
        this.filteredRecipes = this.recipes.filter(recipe => recipe.nameRecipe.includes(""));
        this.searchText = "";
      }
    });
  }
  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {

    this.recipes = [
      { id: 1, nameRecipe: "Receta 1", categoryId: 1, dificult: 1 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 2", categoryId: 2, dificult: 2 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 3", categoryId: 3, dificult: 2 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 4", categoryId: 1, dificult: 3 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 5", categoryId: 3, dificult: 3 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 7", categoryId: 2, dificult: 1 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 8", categoryId: 2, dificult: 1 , timeRecipe: 10, porciones: 10 },
      { id: 1, nameRecipe: "Receta 9", categoryId: 3, dificult: 2 , timeRecipe: 10, porciones: 10 },
      { id: 10, nameRecipe: "Receta 10" }

    ];
    this.filteredRecipes = this.recipes.filter(recipes => recipes.nameRecipe.includes(""));
  }

}
