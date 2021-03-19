import classes from "./Animal.module.css";
import AnimalControls from "./AnimalControls/AnimalControls";
import AnimalPreview from "./AnimalPreview/AnimalPreview";
const Animal = () => {
  return (
    <div className={classes.Animal}>
    
     <AnimalPreview/> 
     <AnimalControls/>
    </div>
  );
}
 
export default Animal;