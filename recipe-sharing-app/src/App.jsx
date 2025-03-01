import AddRecipeForm from './components/AddRecipeForm'
import './App.css'
import RecipeList from './components/RecipeList'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationList'


const App = () => {
  return (
    <Router>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/" element={<p>Home - List of Recipes</p>} />
        <Route path="AddRecipeForm.jsx" element={<AddRecipeForm /> } />
        <Route path="/list" element={<RecipeList />} />
      </Routes>
    </Router>
  );
};

export default App;