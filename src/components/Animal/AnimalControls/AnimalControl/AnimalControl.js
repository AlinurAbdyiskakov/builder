
import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";



const AnimalControl = ({ type, add, remove }) => {
   const names = {
    dog: "  Dog  ",
    pig: "Pig",
    mouse:"Mouse",
    bird:"Bird",
    cat:"Cat",
    reccoon: "Reccoon",
    turtle:"Turtle",
    parrot:"Parrot",
   }
   
   
   
  return (
    <div className={classes.AnimalControl}>
 <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        {names[type]}
        
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default AnimalControl;