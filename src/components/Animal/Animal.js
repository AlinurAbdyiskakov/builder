import { useState } from "react";
import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";

const Animal = () => {
  const [ingredients,setIngredients] = useState({
    Dog: 100,
    // Cat: 100,
    pig: 20,
    toad: 10,
    turtle:20,
    mouse: 15,
    bird:50,
  
  });

  return (
    <div className={classes.Animal}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls ingredients={ingredients} />
    </div>
  );
}

 
export default Animal;