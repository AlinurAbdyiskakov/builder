import classes from "./AnimalControls.module.css";
// import ingredientsBackground from "../../../imges/body-Logo.jpg";
const AnimalControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<PizzaControl
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