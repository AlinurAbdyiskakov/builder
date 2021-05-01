
import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";



const AnimalControl = ({ type, add, remove,total }) => {
 
  
  
  
  const names = {
    Dog: "  Dog  ",
    Pig: "Pig",
    Mouse:"Mouse",
    Cat:"Cat",
    Reccoon: "Reccoon",
    Parrot:"Parrot",
   }
   
  
   
  return (
    <div className={classes.AnimalControl}>
  <Button className={classes.plus}
 
   onClick={() => {remove(type);
        
        }}
      >
        -
      </Button>

      <div className={classes.ingredient}>



        {names[type]}
        
      </div>
 

      <Button
        className={classes.minus}
     
        onClick={() => {
          add(type);
          
        }}
      >
        +
      </Button>
    </div>
  );
}

export default AnimalControl;
