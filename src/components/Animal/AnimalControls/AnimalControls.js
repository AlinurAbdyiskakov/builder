import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";
import ingredientsBackground from "../../../imges/body-Logo.jpg";

const AnimalControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<AnimalControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.AnimalControls}
    style={{ backgroundImage: `url(${ingredientsBackground})` }}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default AnimalControls;