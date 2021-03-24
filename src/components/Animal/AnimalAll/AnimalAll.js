  
import classes from "./AnimalAll.module.css";

import catBackground from "../../../imges/cat1.svg";
import dogBackground from "../../../imges/dog.svg";
import pigBackground from "../../../imges/pig.svg";
// import greenOliveBackground from "../../../images/greenOlive.svg";
// import redPepperBackground from "../../../images/redPepper.svg";
// import yellowPepperBackground from "../../../images/yellowPepper.svg";

const AnimalAll = ({ type }) => {
  const types = {
  cat: { backgroundImage: `url(${catBackground})`, width: "35px", height: "35px" },
   Dog: { backgroundImage: `url(${dogBackground})`, width: "35px", height: "35px" },
   pig: { backgroundImage: `url(${pigBackground})`, width: "10px", height: "10px" },
    // greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
    // redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
    // yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
  };


  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;