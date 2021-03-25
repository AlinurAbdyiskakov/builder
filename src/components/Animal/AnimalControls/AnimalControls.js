import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";
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
    <div className={classes.AnimalControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default AnimalControls;