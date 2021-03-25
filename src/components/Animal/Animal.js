import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";

const Animal = () => {
  const ingredients = {
    // Dog: 10,
    // Cat: 1,
    // pig: 20,
    // toad: 90,
  mouse:20,
  //  cow: 15,
  //  Ship:50,
  
  };

  return (
    <div className={classes.Animal}>
      <AnimalPreview ingredients={ingredients} />
      <AnimalControls />
    </div>
  );
}

 
export default Animal;