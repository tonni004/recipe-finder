import { Recipe } from '@/types/recipe';
import { SearchParams } from '@/types/recipe';

export async function fetchRecipes(params: SearchParams): Promise<Recipe[]> {
  const urlParams = new URLSearchParams();
  if (params.query) urlParams.append('query', params.query);
  if (params.cuisine) urlParams.append('cuisine', params.cuisine);
  if (params.maxReadyTime) urlParams.append('maxReadyTime', params.maxReadyTime);
  urlParams.append('apiKey', process.env.SPOONACULAR_API_KEY!);

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${urlParams.toString()}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await res.json();
  return data.results;
}
