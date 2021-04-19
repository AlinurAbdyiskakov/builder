import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Animal.module.css";
import Button from"../UI/Button/Button"
import { useEffect, useState } from "react";
import axios from "axios";

const Animal = ({history}) => {
  const prices = {
    dog: 80,
    pig: 70,
    mouse:60,
    cat:20,
    reccoon: 67,
    parrot:45,
  };
  

// const [ingredients, setIngredients] = useState({
//   });
//   const [price, setPrice] = useState(0);
//   const [canBuy, setCanBuy] = useState(true);
//   const [isBuying, setIsBuying] = useState(false);
// useEffect(()=>{
//   axios.get('https://builder-e02c1-default-rtdb.firebaseio.com/default.json')
//   .then(response => {
//     setIngredients(response.data.ingredients);
//     setPrice(response.data.price)
//   })
// },[])


//   function checkCanBuy(newIngredients) {
//     const totalIngredients = Object.values(newIngredients)
//       .reduce((total, current) => total + current);
//     setCanBuy(totalIngredients > 0);
//   }


//   function addIngredient(type) {
//     const newIngredients = { ...ingredients };
//     newIngredients[type]++;
//     checkCanBuy(newIngredients);
//     setPrice(price + prices[type]);
//     setIngredients(newIngredients);
//   }

//   function removeIngredient(type) {
//     if (ingredients[type]){
//     const newIngredients = { ...ingredients };
//     newIngredients[type]--;
//     checkCanBuy(newIngredients);
//     setPrice(price - prices[type]);
//     setIngredients(newIngredients);
//    } }
const [ingredients, setIngredients] = useState({});
const [price, setPrice] = useState(0);
const [ordering, setOrdering] = useState(false);

useEffect(loadDefaults, []);

function loadDefaults() {
  axios
    .get('https://builder-e02c1-default-rtdb.firebaseio.com/default.json')
    .then(response => {
      setPrice(response.data.price);

      // For arrays
      // setIngredients(Object.values(response.data.ingredients));
      // For objects
      setIngredients(response.data.ingredients);
    });
}

function addIngredient(type) {
  const newIngredients = { ...ingredients };
  newIngredients[type]++;
  setPrice(price + prices[type]);
  setIngredients(newIngredients);
}

function removeIngredient(type) {
  if (ingredients[type]) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setPrice(price - prices[type]);
    setIngredients(newIngredients);
  }
}

function startOrdering() {
  setOrdering(true);
}

function stopOrdering() {
  setOrdering(false);
}

function finishOrdering() {
  axios
    .post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
      ingredients: ingredients,
      price: price,
      address: "1234 Jusaeva str",
      phone: "0 777 777 777",
      name: "Sadyr Japarov",
    })
    .then(() => {
      setOrdering(false);
      loadDefaults();
      history.push('/checkout');
    });
}

return (
  <div className={classes.Animal}>
    <AnimalPreview
      ingredients={ingredients}
      price={price} />
    <AnimalControls
      ingredients={ingredients}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      startOrdering={startOrdering}
      />
    <Modal
      show={ordering}
      cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
          />
        <Button onClick={finishOrdering} green>Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
  </div>
);
}

//   return (
//     <div className={classes.Animal}>
//         <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
//        <OrderSummary ingredients={ingredients} price={price} /></Modal>
//       <AnimalPreview ingredients={ingredients}
//       price={price} />
//       <AnimalControls
      
//        canBuy={canBuy}
//        setIsBuying={setIsBuying}
//         ingredients={ingredients}
//         addIngredient={addIngredient}
//         removeIngredient={removeIngredient}
//         />
//     </div>
//   );
// }

export default Animal;