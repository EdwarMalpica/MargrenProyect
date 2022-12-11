export interface Recipe {
  id: number;
  categoryId?: number;
  name: string;
  price?: number;
  description?: string;
  img?: string;
  amount?: number;
  unit?: string;
}
