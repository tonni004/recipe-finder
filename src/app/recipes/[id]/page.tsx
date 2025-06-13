import Image from 'next/image';
import { RecipeDetails } from '@/types/recipe';
import { fetchRecipeDetails } from '@/lib/fetchRecipeDetails';
import { BackButton } from "@/components/BackButton";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailsPage({ params }: Props) {
  const { id } = await params;
  let recipe: RecipeDetails;

  try {
    recipe = await fetchRecipeDetails(Number(id));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return <div className="p-6 text-red-500 font-semibold">Error loading recipe details.</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className='max-w-4xl w-full p-15 rounded shadow-md bg-white'>
        <div className="pb-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">{recipe.title}</h1>

          <Image
            src={recipe.image}
            alt={recipe.title}
            width={550}
            height={400}
            className="rounded mb-6"
            priority
          />
        </div>

        <div className="mb-4 text-gray-700">
          <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Ingredients:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </section>

        {recipe.summary && (
          <section className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{__html: recipe.summary}}/>
        )}

        <BackButton route="recipes" page='List' />
      </div>
    </main>
  );
}
