
import React from 'react'
import { useEffect, useState } from 'react'

const Homepage = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((Response) => Response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg p-4 transform transition hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
            <p className="text-gray-600 mt-1">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage
