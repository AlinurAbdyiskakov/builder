  
import classes from "./AnimalAll.module.css";


import dogBackground from "../../../imges/dog.svg";
import catBackground from "../../../imges/cat.svg";
import pigBackground from "../../../imges/pig.svg";
import cowBackground from "../../../imges/cow.svg";
import mouseBackground from "../../../imges/mouse.svg";
import toad from "../../../imges/toad.svg";
// import Ship from "./AnimalAll/Ship";

const AnimalAll = ({ type }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "35px", height: "35px" },
   Cat: { backgroundImage: `url(${catBackground})`, width: "35px", height: "35px" },
   pig: { backgroundImage: `url(${pigBackground})`, width: "35px", height: "35px" },
    cow: { backgroundImage: `url(${cowBackground})`, width: "35px", height: "35px" },
    mouse: { backgroundImage: `url(${mouseBackground})`, width: "20px", height: "20px" },
    toad: { backgroundImage: `url(${toad})`, width: "50px", height: "50px"  },
   
  };
  // function getPosition(ingredientWidth) {
  //   const AnimalDiameter = 580;
  //   const AnimalRadius = AnimalDiameter / 2;
  //   const ingredientRadius = parseInt(ingredientWidth) / 2;

  //   const ingredientTop = Math.round(Math.random() * AnimalDiameter);
  //   const ingredientLeft = Math.round(Math.random() * AnimalDiameter);

  //   const distance = Math.sqrt(
  //     Math.pow(ingredientTop - AnimalRadius, 2) + Math.pow(ingredientLeft - AnimalRadius, 2)
  //   ) + ingredientRadius;

  //   return distance < AnimalRadius
  //     ? {
  //       top: ingredientTop - ingredientRadius,
  //       left: ingredientLeft - ingredientRadius
        
  //     }
  //     : getPosition(ingredientWidth);
  // }

  // const position = getPosition(types[type].width);
  // types[type].top = position.top + "px";
  // types[type].left = position.left + "px";
 


  return (
    <div className={classes.AnimalAll} style={types[type]}>
      <div className={classes.Ship}></div>
      </div>
  );
}
export default AnimalAll;