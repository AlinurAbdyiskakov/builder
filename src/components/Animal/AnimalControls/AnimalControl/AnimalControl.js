
import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";
import { useDispatch } from "react-redux";



const AnimalControl = ({ type, count }) => {
const dispatch=useDispatch();
  const names = {
    Dog: "  Dog  ",
    Cat:"Cat",
    Reccoon: "Reccoon",
Chameleon: "Chameleon",
    Hamster:"Hamster",
    Turtle:"Turtle",
   }
   
  return (
    <div className={classes.AnimalControl}>
        <Button onClick={() => dispatch({ type: "ADD_ANIMAL", animal: type })}>+</Button>
        {names[type]}
        <Button onClick={() => dispatch({ type: "REMOVE_ANIMAL", animal: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default AnimalControl;
