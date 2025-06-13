import { Suspense } from 'react';
import RecipesListWithFetch from '../../components/RecipesListWithFetch';
import { SearchParams } from "@/types/recipe";

export default function RecipesPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return (
    <main className="flex items-center justify-center bg-gray-100 p-6">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600 text-[20px]">Loading recipes... 👀</div>}>
        <RecipesListWithFetch searchParams={Promise.resolve(searchParams)} />
      </Suspense>
    </main>
  );
}
