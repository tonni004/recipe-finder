import { RecipeDetails } from '@/types/recipe';

export async function fetchRecipeDetails(id: number): Promise<RecipeDetails> {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  const recipe: RecipeDetails = await res.json();
  return recipe;
}
