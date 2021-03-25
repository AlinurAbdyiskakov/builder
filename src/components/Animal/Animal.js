import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";

import classes from "./Animal.module.css";
import { useState } from "react";

const Animal = () => {
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    greenOlive: 1,
    blackOlive: 1,
    redPepper: 1,
    yellowPepper: 1,
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