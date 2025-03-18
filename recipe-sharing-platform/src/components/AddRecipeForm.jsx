import { useState} from "react"

const AddRecipeForm = () => {

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setInstructions] = useState("");
  const [error, setError] = useState("");
  const validate = (field, value) => {
    if (!value.trim()) {
      setError(`${field} is required.`);
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Validation: Check if all fields are filled
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Ensure at least 2 ingredients
    const ingredientsArray = ingredients.split("\n").filter((ing) => ing.trim() !== "");
    if (ingredientsArray.length < 2) {
      setError("Please enter at least 2 ingredients.");
      return;
    }

    setError(""); // Clear any previous errors

    // New recipe object
    const newRecipe = {
      id: Date.now(), // Generate unique ID
      title,
      summary: steps.substring(0, 50) + "...", // Short summary
      image: "https://via.placeholder.com/150", // Placeholder image
      ingredients: ingredientsArray,
      steps: steps.split("\n").filter((step) => step.trim() !== ""),
    };

    console.log("New Recipe Added:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-medium">Recipe Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium">Ingredients (One per line)</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              placeholder="Example: \n1 cup flour \n2 eggs"
            ></textarea>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-medium">Preparation Steps (One per line)</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={steps}
              onChange={(e) => setInstructions(e.target.value)}
              rows="4"
              placeholder="Example: \nStep 1: Preheat oven \nStep 2: Mix ingredients"
            ></textarea>
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

  )};

  export default AddRecipeForm;