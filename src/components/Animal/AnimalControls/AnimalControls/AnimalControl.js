import AnimalAll from "../../AnimalAll/AnimalAll";
import classes from "./PizzaControl.module.css";

const AnimalControl = ({ type, add, remove }) => {
  return (
    <div className={classes.AnimalControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <AnimalAll type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default AnimalControl;