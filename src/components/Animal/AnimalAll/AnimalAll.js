  
import classes from "./AnimalAll.module.css";


import dogBackground from "../../../imges/dog.svg";
import catBackground from "../../../imges/cat.svg";
import pigBackground from "../../../imges/pig.svg";
// import greenOliveBackground from "../../../images/greenOlive.svg";
// import redPepperBackground from "../../../images/redPepper.svg";
// import yellowPepperBackground from "../../../images/yellowPepper.svg";

const AnimalAll = ({ type }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "35px", height: "35px" },
   Cat: { backgroundImage: `url(${catBackground})`, width: "35px", height: "35px" },
   pig: { backgroundImage: `url(${pigBackground})`, width: "35px", height: "35px" },
    // greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
    // redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
    // yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
  };
  function getPosition(ingredientWidth) {
    const AnimalDiameter = 550;
    const AnimalRadius = AnimalDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * AnimalDiameter);
    const ingredientLeft = Math.round(Math.random() * AnimalDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - AnimalRadius, 2) + Math.pow(ingredientLeft - AnimalRadius, 2)
    ) + ingredientRadius;

    return distance < AnimalRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";


  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;