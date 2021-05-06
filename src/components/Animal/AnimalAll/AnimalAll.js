  
import classes from "./AnimalAll.module.css";


import dogBackground from "../../../imges/dog.svg";
import cat from "../../../imges/cat.svg";
import chameleon from "../../../imges/pig.svg";
import reccoon from "../../../imges/raccoon.svg";
import mouse from"../../../imges/mouse.svg";
import Hamster from "../../../imges/parrot.svg"



const AnimalAll = ({ type ,fixed }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "50px", height: "50px"},
   Cat: { backgroundImage: `url(${cat})`, width: "50px", height: "50px" },
   Chameleon: { backgroundImage: `url(${chameleon})`, width: "60px", height: "60px",},
   
    Reccoon: { backgroundImage: `url(${reccoon})`, width: "50px", height: "50px"  },
   
    Mouse:{ backgroundImage: `url(${mouse})`, width: "50px", height: "50px"  },
    Hamster:{ backgroundImage: `url(${Hamster})`, width: "50px", height: "50px"  },
  };
  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;