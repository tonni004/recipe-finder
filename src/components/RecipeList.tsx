import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import { BackButton } from "@/components/BackButton";

interface RecipeListProps {
  recipes: Recipe[];
}

export function RecipeList({ recipes }: RecipeListProps) {
  if (recipes.length === 0) {
    return (
      <p className="min-h-screen flex items-center justify-center text-gray-600 text-[20px]">
        No recipes found 😿
      </p>
    );
  }

  return (
    <div className='flex flex-col'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition bg-white border-gray-200"
          >
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
              priority={index < 3}
            />
            <h2 className="mt-2 text-lg font-medium text-gray-600">{recipe.title}</h2>
          </Link>
        ))}
      </div>

      <BackButton route="/" page='Home'/>
    </div>
  );
}
