
import Button from "../../UI/Button/Button";
import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";

const AnimalControls = ({
  animals,
  // addIngredient,
  // removeIngredient,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const animal in animals) {
    
    total += animals[animal];
  
    results.push(<AnimalControl
        key={animal}
    
        count={animals[animal]}
        type={animal} />)
  }

  return (
    <div className={classes.AnimalControls}>
      <strong>Animals</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default AnimalControls;