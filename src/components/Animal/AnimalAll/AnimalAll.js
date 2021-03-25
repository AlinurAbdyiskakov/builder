  
import classes from "./AnimalAll.module.css";


import dogBackground from "../../../imges/dog.svg";
import cat from "../../../imges/cat.svg";
import pigBackground from "../../../imges/pig.svg";
import cowBackground from "../../../imges/cow.svg";
import turtle from "../../../imges/turtle.svg";
import toad from "../../../imges/toad.svg";
import bird from "../../../imges/bird.svg";
import mouse from"../../../imges/mouse.svg"

const AnimalAll = ({ type ,fixed }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "50px", height: "50px" },
   Cat: { backgroundImage: `url(${cat})`, width: "80px", height: "80px" },
   pig: { backgroundImage: `url(${pigBackground})`, width: "50px", height: "50px" },
    cow: { backgroundImage: `url(${cowBackground})`, width: "50px", height: "50px" },
    turtle: { backgroundImage: `url(${turtle})`, width: "50px", height: "50px" },
    toad: { backgroundImage: `url(${toad})`, width: "50px", height: "50px"  },
    bird:{ backgroundImage: `url(${bird})`, width: "50px", height: "50px"  },
    mouse:{ backgroundImage: `url(${mouse})`, width: "50px", height: "50px"  },
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

  // // Get random position for this ingredient.
  // if (!fixed) {
  //   const position = getPosition(types[type].width);
  //   types[type].top = position.top + "px";
  //   types[type].left = position.left + "px";
  // }
  // // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;