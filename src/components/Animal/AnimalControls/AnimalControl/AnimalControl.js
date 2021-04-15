
import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";
import expp from "../../../../Audio/exp.mp3";
import plusP from "../../../../Audio/plus.mp3";


const AnimalControl = ({ type, add, remove }) => {
  function playExp() {
    let exp = new Audio();
    exp.preload = "auto";
    exp.src = expp;
    exp.play();
  }
  function playPlus() {
    let plus = new Audio();
    plus.preload = "auto";
    plus.src = plusP;
    plus.play();
  }

  
  
  
  const names = {
    dog: "  Dog  ",
    pig: "Pig",
    mouse:"Mouse",
    cat:"Cat",
    reccoon: "Reccoon",
    parrot:"Parrot",
   }
   
  
   
  return (
    <div className={classes.AnimalControl}>
  <Button
        className={classes.plus}
        onClick={() => {
          remove(type);
          playPlus();
        }}
      >
        -
      </Button>



 {/* <Button onClick={() => remove(type),playPlus()}>-</Button> */}


      <div className={classes.ingredient}>



        {names[type]}
        
      </div>
      {/* <Button onClick={() => add(type)}>+</Button> */}

      <Button
        className={classes.minus}
        onClick={() => {
          add(type);
          playExp();
        }}
      >
        +
      </Button>
    </div>
  );
}

export default AnimalControl;
