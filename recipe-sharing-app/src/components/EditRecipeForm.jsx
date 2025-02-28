import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useRecipeStore } from "../store";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = React.useState(recipe.title);
  const [description, setDescription] = React.useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
    navigate(`/recipe/${recipe.id}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
