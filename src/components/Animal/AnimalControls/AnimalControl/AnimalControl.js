
import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";
import { useDispatch } from "react-redux";
import { add, remove } from "../../../store/actions/Animal";


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
        <Button onClick={() => dispatch(add(type))}>+</Button>
        {names[type]}
        <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default AnimalControl;
