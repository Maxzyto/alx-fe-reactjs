import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const RecipeDetail = () => {

  const [recipe, setRecipe] = useState(null);
  const id = useParams; // Define the id variable with a value

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
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

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700">
            Step 1: Do this. <br />
            Step 2: Do that. <br />
            Step 3: Enjoy!
          </p>
        </div>

        <a
          href="/"
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
