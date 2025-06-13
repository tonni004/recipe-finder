import { fetchRecipes } from '@/lib/fetchRecipes';
import { RecipeList } from '@/components/RecipeList';
import { Recipe } from '@/types/recipe';
import { SearchParams } from "@/types/recipe";

interface RecipesListWithFetchProps {
  searchParams: Promise<SearchParams>;
}

export default async function RecipesListWithFetch({ searchParams }: RecipesListWithFetchProps) {
  const params = await searchParams;
  const recipes: Recipe[] = await fetchRecipes(params);

  return <RecipeList recipes={recipes} />;
}
