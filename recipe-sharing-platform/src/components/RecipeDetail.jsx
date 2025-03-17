import React, { useEffect } from 'react'

export const RecipeDetail = () => {

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
    })
  })
  return (
    <div>RecipeDetail</div>
  )
}
