import AnimalAll from"../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";

const AnimalPreview = () => {
  return (
    <div className={classes.AnimalPreview}>
     <div  className={ classes.color}>
         <AnimalAll type="Dog"/>
         {/* <AnimalAll type="cat"/>
         <AnimalAll type="pig"/>
         <AnimalAll type="cou"/> */}
         {/* <AnimalAkl type="regf"/>
         <AnimalAml type="regf"/> */}
     </div>
    </div>
  );
}
 
export default AnimalPreview;