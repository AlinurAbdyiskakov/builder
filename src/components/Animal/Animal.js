import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";

const Animal = () => {
  const ingredients = {
    Dog: 100,
    Cat: 100,
    pig: 20,
    toad: 10,
  mouse:20,
   cow: 15,
   Ship:50,
  
  };

  return (
    <div className={classes.Animal}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls />
    </div>
  );
}

 
export default Animal;