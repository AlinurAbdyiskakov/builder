import AnimalAll from"../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";

const AnimalPreview = () => {
  return (
    <div className={classes.AnimalPreview}>
     <div  className={ classes.color}>
         <AnimalAll type="regf"/>
         <AnimalAkl type="regf"/>
         <AnimalAml type="regf"/>
     </div>
    </div>
  );
}
 
export default AnimalPreview;