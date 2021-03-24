import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";
const Animal = () => {
  const ingredients = {
    Dog: 10,
    Cat: 100,
    pig: 20,
  //   horse: 20,
  //  ship: 20,
  //  cou: 15,
  };

  return (
    <div className={classes.Animal}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls />
    </div>
  );
}

 
export default Animal;