import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import recipesData from "../data.json"

export const RecipeDetail = () => {

  const { id: recipeId } = useParams();
  const [recipe] = useState(() => {
    return recipesData.find((r) => r.id === recipeId) || null;
  });

  if (!recipe) {
    return <div className="text-center text-red-500 text-lg mt-10">Recipe not found.</div>;
  }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        {/* Ingredients List */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions List */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <a href="/" className="inline-block mt-4 text-blue-500 hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
