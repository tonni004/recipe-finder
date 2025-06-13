'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');
  const [loading, setLoading] = useState(false);

  const isFormValid = query || cuisine || maxReadyTime;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams(
      Object.entries({ query, cuisine, maxReadyTime })
        .filter(([, value]) => value)
    );

    router.push(`/recipes?${params.toString()}`);
  };


  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-gray-600 text-center">🍽️ Recipe Finder</h1>

        <input
          type="text"
          placeholder="Search recipe (e.g. pasta)"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="w-full border border-gray-300 rounded px-2 py-2 text-gray-400"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          <option value="">Select cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Japanese">Japanese</option>
        </select>

        <input
          type="number"
          placeholder="Max ready time (minutes)"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600"
          value={maxReadyTime}
          onChange={(e) => setMaxReadyTime(e.target.value)}
        />

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-full py-2 rounded font-semibold transition ${
            isFormValid
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-purple-300 text-white-800 cursor-not-allowed'
          }`}
        >
          {loading ? 'Loading...' : 'Next'}
        </button>
      </form>
    </main>
  );
}
