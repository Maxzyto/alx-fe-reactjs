import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Please enter at least 2 ingredients.";
    } else {
      const ingredientsArray = ingredients
        .split("\n")
        .filter((ing) => ing.trim() !== "");
      if (ingredientsArray.length < 2) {
        newErrors.ingredients = "At least 2 ingredients are required.";
      }
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Please enter preparation steps.";
    } else {
      const instructionsArray = instructions
        .split("\n")
        .filter((step) => step.trim() !== "");
      if (instructionsArray.length < 2) {
        newErrors.instructions = "At least 2 steps are required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop if validation fails

    // New recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: instructions.substring(0, 50) + "...",
      image: "https://via.placeholder.com/150",
      ingredients: ingredients.split("\n").filter((ing) => ing.trim() !== ""),
      instructions: instructions
        .split("\n")
        .filter((step) => step.trim() !== ""),
    };

    console.log("New Recipe Added:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 mix-blend-screen flex items-center justify-center px-5">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Add a New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-medium">
              Recipe Title
            </label>
            <input
              type="text"
              className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
                errors.title
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium">
              Ingredients (One per line)
            </label>
            <textarea
              className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
                errors.ingredients
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              placeholder="Example: \n1 cup flour \n2 eggs"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-medium">
              Preparation Steps (One per line)
            </label>
            <textarea
              className={`w-full border p-2 rounded focus:outline-none focus:ring-2 ${
                errors.instructions
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="4"
              placeholder="Example: \nStep 1: Preheat oven \nStep 2: Mix ingredients"
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
