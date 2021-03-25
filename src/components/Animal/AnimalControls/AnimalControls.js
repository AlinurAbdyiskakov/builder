import classes from "./AnimalControls.module.css";
import ingredientsBackground from "../../../imges/body-Logo.jpg";
const AnimalControls = ({ingredients}) => {
const results=[];
for (const ingredient in ingredients) {
  results.push(<AnimalControls type={ingredient} />)
}

  return (
    <div className={classes.AnimalControls}
    style={{ backgroundImage: `url(${ingredientsBackground})` }}>
 
   </div>
  );
}
 
export default AnimalControls;