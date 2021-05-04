import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Animal.module.css";
import Button from"../UI/Button/Button"
import { useState } from "react";
import { useSelector } from "react-redux";

const Animal = ({history}) => {
  


const ingredients=useSelector(state=>state.ingredients);
const price =useSelector(state=>state.price);

const [ordering, setOrdering] = useState(false);

// useEffect(loadDefaults, []);

// function loadDefaults() {
//   axios
//     .get('https://builder-e02c1-default-rtdb.firebaseio.com/default.json')
//     .then(response => {
//       setPrice(response.data.price);

      
//       setAnimals(response.data.ingredients);
//     });
// }


function startOrdering() {
  setOrdering(true);
}

function stopOrdering() {
  setOrdering(false);
}

function finishOrdering() {
 
 
      setOrdering(false);
      // loadDefaults();
      history.push('/checkout');
    
}

return (
  <div className={classes.Animal}>
    <div className={classes.Aimall}>
    <AnimalPreview
      ingredients={ingredients}
      price={price} />
    <AnimalControls
      ingredients={ingredients}

      startOrdering={startOrdering}
      />
    <Modal
      show={ordering}
      cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
          />
        <Button onClick={finishOrdering} >Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal></div>
  </div>
);
}



export default Animal;