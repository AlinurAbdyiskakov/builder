import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Animal.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Animal = () => {
  const prices = {
    dog: 80,
    pig: 70,
    mouse:60,
    cat:20,
    reccoon: 67,
    parrot:45,
  };
  

const [ingredients, setIngredients] = useState({
  });
  const [price, setPrice] = useState(0);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);
useEffect(()=>{
  axios.get('https://builder-e02c1-default-rtdb.firebaseio.com/default.json')
  .then(response => {
    setIngredients(response.data.ingredients);
    setPrice(response.data.price)
  })
},[])


  function checkCanBuy(newIngredients) {
    const totalIngredients = Object.values(newIngredients)
      .reduce((total, current) => total + current);
    setCanBuy(totalIngredients > 0);
  }


  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    checkCanBuy(newIngredients);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]){
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    checkCanBuy(newIngredients);
    setPrice(price - prices[type]);
    setIngredients(newIngredients);
   } }

  return (
    <div className={classes.Animal}>
        <Modal show={isBuying} cancelCallback={() => setIsBuying(false)}>
       <OrderSummary ingredients={ingredients} price={price} /></Modal>
      <AnimalPreview ingredients={ingredients}
      price={price} />
      <AnimalControls
      
       canBuy={canBuy}
       setIsBuying={setIsBuying}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default Animal;