import AnimalAll from"../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";

const AnimalPreview = () => {
  return (
    <div className={classes.AnimalPreview}>
     <div  className={ classes.color}>
         <AnimalAll type="regf"/>
       
     </div>
    </div>
  );
}
 
export default AnimalPreview;