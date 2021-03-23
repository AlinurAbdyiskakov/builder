import AnimalAll from"../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";

const AnimalPreview = () => {
  return (
    <div className={classes.AnimalPreview}>
     <div  className={ classes.color}>
       
         <AnimalAll type="boat"/>
         <AnimalAll type="boat"/>
         <AnimalAll type="boat"/>
         <AnimalAll type="boat"/>
         <AnimalAll type="boat"/>
         <AnimalAll type="boat"/>
         <AnimalAll type="boat"/>
         <AnimalAll type="ship"/>
         <AnimalAll type="ship"/><AnimalAll type="ship"/><AnimalAll type="ship"/><AnimalAll type="ship"/><AnimalAll type="ship"/>
     
     </div>
    </div>
  );
  
}
 
export default AnimalPreview;