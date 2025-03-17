
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import { RecipeDetail } from './components/RecipeDetail'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/receipe/:id' element={<RecipeDetail />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App
