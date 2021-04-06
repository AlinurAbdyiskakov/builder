import Button from "../../UI/Button/Button";
import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";
// import ingredientsBackground from "../../../imges/body-Logo.jpg";


  // const AnimalControls = ({ ingredients, addIngredient, removeIngredient, canBuy }) => {
const AnimalControls = ({
    ingredients,
    addIngredient,
    removeIngredient,
    canBuy,
    setIsBuying
  }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<AnimalControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />
        )
  }

  return (
    <div className={classes.AnimalControls}>
    {/* style={{ backgroundImage: `url(${ingredientsBackground})` }} */}
      <strong >Animal house</strong>
      {results}
      <button disabled={!canBuy}>Order</button>
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}

export default AnimalControls;