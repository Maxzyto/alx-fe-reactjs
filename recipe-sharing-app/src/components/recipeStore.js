import { create } from "zustand";


const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favoriteRecipes: [],
  recommendations: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  addFavorite: (recipe) =>
    set((state) => ({ favoriteRecipes: [...state.favoriteRecipes, recipe] })),
  removeFavorite: (id) =>
    set((state) => ({
      favoriteRecipes: state.favoriteRecipes.filter((recipe) => recipe.id !== id),
    })),
  generateRecommendations: () =>
    set((state) => {
      const recommendations = state.recipes.filter((recipe) =>
        state.favoriteRecipes.some((fav) => fav.title === recipe.title)
      );
      return { recommendations: recommendations };
    }),
}));

export { useRecipeStore };