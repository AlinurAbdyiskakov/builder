
import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";
import { useDispatch } from "react-redux";



const AnimalControl = ({ type, count }) => {
const dispatch=useDispatch();
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
        <Button onClick={() => dispatch({ type: "ADD_ANIMAL", ingredient: type })}>+</Button>
        {names[type]}
        <Button onClick={() => dispatch({ type: "REMOVE_ANIMAL", ingredient: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default AnimalControl;
