import AnimalAll from"../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";


const AnimalPreview = ({ animalAlls }) => {
  const result = [];
  for (const ingredient in animalAlls) {
    for (let i = 0; i < animalAlls[ingredient]; i++) {
      result.push(<AnimalAll type={animalAlls} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${animalAllsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default AnimalPreview;