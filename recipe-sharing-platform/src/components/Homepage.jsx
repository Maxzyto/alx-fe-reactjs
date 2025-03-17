
import React from 'react'
import { useEffect } from 'react'

const Homepage = () => {

  useEffect(() => {
    fetch("/src/data.json")
      .then((Response) => Response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes", error));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Homepage
