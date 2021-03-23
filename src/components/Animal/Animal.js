import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";
const Animal = () => {
  const ingredients = {
    Dog: 20,
    cat: 20,
    pige: 20,
    horse: 20,
   ship: 20,
   cou: 15,
  };

  return (
    <div className={classes.PizzaBuilder}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls />
    </div>
  );
}

 
export default Animal;