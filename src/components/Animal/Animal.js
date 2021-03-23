import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";
const Animal = () => {
  const ingredients = {
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
  };

  return (
    <div className={classes.PizzaBuilder}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls />
    </div>
  );
}

 
export default Animal;