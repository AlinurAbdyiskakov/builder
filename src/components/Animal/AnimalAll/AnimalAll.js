  
import classes from "./AnimalAll.module.css";


import dogBackground from "../../../imges/dog.svg";
import cat from "../../../imges/cat.svg";
import pigBackground from "../../../imges/pig.svg";
import reccoon from "../../../imges/raccoon.svg";
import mouse from"../../../imges/mouse.svg";
import parrot from "../../../imges/parrot.svg"



const AnimalAll = ({ type ,fixed }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "50px", height: "50px"},
   Cat: { backgroundImage: `url(${cat})`, width: "50px", height: "50px" },
   Pig: { backgroundImage: `url(${pigBackground})`, width: "50px", height: "50px",},
   
    Reccoon: { backgroundImage: `url(${reccoon})`, width: "50px", height: "50px"  },
   
    Mouse:{ backgroundImage: `url(${mouse})`, width: "50px", height: "50px"  },
    Parrot:{ backgroundImage: `url(${parrot})`, width: "50px", height: "50px"  },
  };
  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;