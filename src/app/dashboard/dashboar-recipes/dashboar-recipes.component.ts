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
    this.filteredRecipes = this.recipes.filter(recipes => recipes.name.toLowerCase().includes(text));
  }

  public openRecipeCreator(): void {
    this.modalService.open(RecipeComponent, { centered: true, scrollable:false, size: "lg" });
  }

  public openRecipeEditor(recipe: Recipe): void {
    const modalRef = this.modalService.open(RecipeComponent, { centered: true, scrollable: true })
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
        this.filteredRecipes = this.recipes.filter(product => product.name.includes(""));
        this.searchText = "";
      }
    });
  }
  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    // this.productsService.getProducts().subscribe((products: Product[]) => {
    //   this.products = products;
    // });
    this.recipes = [
      { id: 1, name: "Producto 1", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 2, name: "Producto 2", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 3, name: "Producto 3", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 4, name: "Producto 4", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 5, name: "Producto 5", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 6, name: "Producto 6", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 7, name: "Producto 7", categoryId: 1, amount: 10, price: 5000, unit: "gramos" },
      { id: 8, name: "Producto 8", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 9, name: "Producto 9", categoryId: 2, amount: 10, price: 5000, unit: "gramos" },
      { id: 10, name: "Producto 10" }
    ];
    this.filteredRecipes = this.recipes.filter(recipes => recipes.name.includes(""));
  }

}
