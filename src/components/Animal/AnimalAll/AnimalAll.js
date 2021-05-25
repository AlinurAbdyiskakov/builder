import classes from "./AnimalAll.module.css";
import dogBackground from "../../../imges/dog.svg";
import cat from "../../../imges/cat.svg";
import chameleon from "../../../imges/shamelion.svg";
import reccoon from "../../../imges/reccoon.svg";
import turtle from"../../../imges/turtle.svg";
import Hamster from "../../../imges/hamster.svg";

const AnimalAll = ({ type ,fixed }) => {
  const types = {
  dog: { backgroundImage: `url(${dogBackground})`, width: "90px", height: "90px"},
  cat: { backgroundImage: `url(${cat})`, width: "90px", height: "90px" },
  chameleon: { backgroundImage: `url(${chameleon})`, width: "90px", height: "90px",},
  reccoon: { backgroundImage: `url(${reccoon})`, width: "90px", height: "90px"  },
  turtle:{ backgroundImage: `url(${turtle})`, width: "90px", height: "90px"  },
  hamster:{ backgroundImage: `url(${Hamster})`, width: "90px", height: "90px"  },
  }
 
  return (
  <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;