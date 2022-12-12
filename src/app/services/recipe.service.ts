import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe} from "../models/entities/recipe.interface";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public api: string = "/recipe";

  constructor(private http: HttpClient) { }

  public addProduct(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.api, recipe);
  }

  public updateProduct(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.api, recipe);
  }

  public getProducts(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.api);
  }

  public getProduct(recipeId: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.api + "?recipeId=" + recipeId);
  }

  public removeProduct(recipeId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + "?recipeId=" + recipeId);
  }

}
