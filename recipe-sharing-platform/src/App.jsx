
import { Route, Routes BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/receipe/:id' element={<RecipeDetail />}
        </Routes>
      </Router>
     
    </>
  )
}

export default App
