
import { useRecipeStore } from '../store';


  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore((state) =>
      state.recipes.find((recipe) => recipe.id === recipeId)
    );
    const AddFavorite = useRecipeStore((state) => state.addFavorite);
    const RemoveFavorite = useRecipeStore((state) => state.removeFavorite);
    const isFavorite = useRecipeStore((state) =>
      state.favoriteRecipes.some((fav) => fav.id === recipeId)
    );
    
    if (!recipe) {
      return <div>Recipe not found</div>;
    }
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button
          onClick={() => {
            if (isFavorite) {
              RemoveFavorite(recipeId);
            } else {
              AddFavorite(recipe);
            }
          }}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    );
};
  
export default RecipeDetails;