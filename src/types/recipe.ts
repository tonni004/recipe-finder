export interface SearchParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  extendedIngredients: { id: number; original: string }[];
  readyInMinutes: number;
  servings: number;
  summary: string;
}