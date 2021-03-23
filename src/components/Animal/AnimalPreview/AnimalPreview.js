import AnimalAll from"../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";
import ingredientsBackground from "../../../imges/maiak.svg";

const AnimalPreview = ({ animalAlls }) => {
  const result = [];
  for (const animalAll in animalAlls) {
    for (let i = 0; i < animalAlls[animalAll]; i++) {
      result.push(<AnimalAll type={animalAll} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default AnimalPreview;