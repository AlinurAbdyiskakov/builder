import classes from "./AnimalAll.module.css";
import dogBackground from "../../../imges/about.svg";
import cat from "../../../imges/help.svg";
import chameleon from "../../../imges/say.svg";
import reccoon from "../../../imges/look.svg";
import turtle from"../../../imges/good.svg";
import Hamster from "../../../imges/spell1.svg";

const AnimalAll = ({ type ,fixed }) => {
  const types = {
  dog: { backgroundImage: `url(${dogBackground})`, width: "60px", height: "60px"},
  cat: { backgroundImage: `url(${cat})`, width: "60px", height: "60px" },
  chameleon: { backgroundImage: `url(${chameleon})`, width: "60px", height: "60px",},
  reccoon: { backgroundImage: `url(${reccoon})`, width: "60px", height: "60px"  },
  turtle:{ backgroundImage: `url(${turtle})`, width: "90px", height: "90px"  },
  hamster:{ backgroundImage: `url(${Hamster})`, width: "60px", height: "60px"  },
  }
 
  return (
  <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;