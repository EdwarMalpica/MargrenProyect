export interface Recipe {
    id: number;
    nameRecipe: string;
    categoryId?: number;
    dificult?: number;
    ingredients?: Object[];
    time?: Object[];
    quantityPerson?: number;
    steps?: Object[];
  }