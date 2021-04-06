import Button from "../../../UI/Button/Button";
import AnimalAll from "../../AnimalAll/AnimalAll";
import classes from "./AnimalControl.module.css";

const AnimalControl = ({ type, add, remove }) => {
  return (
    <div className={classes.AnimalControl}>
 <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <AnimalAll type={type} fixed />
      </div>
      <Button onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default AnimalControl;