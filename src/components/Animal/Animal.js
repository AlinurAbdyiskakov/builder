import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";

import classes from "./Animal.module.css";
import { useState } from "react";

const Animal = () => {
  const [ingredients, setIngredients] = useState({
    Dog: 0,
    pig: 0,
    mouse: 0,
    bird:0,
  Cat:0,
    toad: 0,
    turtle:0,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
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
      <AnimalControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default Animal;