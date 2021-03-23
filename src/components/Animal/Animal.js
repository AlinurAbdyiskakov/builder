import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";
const Animal = () => {
  const animalAlls ={
    boat:1,
    ship:1,
     corgoship:100,
  
  };
  return (
    <div className={classes.Animal}>
    
     <AnimalPreview animalAlls={animalAlls}/> 
     <AnimalControls/>
    </div>
  );
}
 
export default Animal;