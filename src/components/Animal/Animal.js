import { useState } from "react";
import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";

const Animal = () => {
  const [Ingredients,setIngredients] = useState({
    Dog: 1,
    // Cat: 100,
    pig: 1,
    toad: 1,
    turtle:1,
    mouse: 1,
    bird:1,
  
  });

  function addIngredients(type) {
    const newIngredients=Ingredients;
    newIngredients[type]--;
    setIngredients(newIngredients);
  }
  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
  }
  return (
    <div className={classes.Animal}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls ingredients={ingredients} />
    </div>
  );
}

 
export default Animal;