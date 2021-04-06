import Button from "../../UI/Button/Button";
import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";

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
   
      <strong >Animal house</strong>
      {results}
    
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}

export default AnimalControls;