import classes from "./AnimalControls.module.css";
import ingredientsBackground from "../../../imges/body-Logo.jpg";
const AnimalControls = () => {
  return (
    <div className={classes.AnimalControls}
    style={{ backgroundImage: `url(${ingredientsBackground})` }}>
 {/* <div className={ classes.Dog}>
   <h2>Dog</h2>
 <button>+</button>
 <h1>0</h1>
 <button>-</button>
 </div>
 <div className={ classes.Dog}>
   <h2>cat </h2>
 <button>+</button>
 <h1>0</h1>
 <button>-</button>
 </div>
 <div className={ classes.Dog}>
   <h2>pig </h2>
 <button>+</button>
 <h1>0</h1>
 <button>-</button>
 </div>
 <div className={ classes.Dog}>
   <h2>Bird</h2>
 <button>+</button>
 <h1>0</h1>
 <button>-</button>
 </div>
 <div className={ classes.Dog}>
   <h2>turtle</h2>
 <button>+</button>
 <h1>0</h1>
 <button>-</button>
 </div> */}
   </div>
  );
}
 
export default AnimalControls;