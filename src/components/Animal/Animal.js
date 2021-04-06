import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Animal.module.css";
import { useState } from "react";

const Animal = () => {
  const prices = {
    Dog: 80,
    pig: 70,
    mouse:60,
    bird:40,
  Cat:20,
    reccoon: 6760,
    turtle:540,
    parrot:450,
  };
  const [ingredients, setIngredients] = useState({
    Dog: 0,
    pig: 0,
    mouse: 0,
    bird:0,
  Cat:0,
    reccoon: 0,
    turtle:0,
    parrot:0,
  });


  const [price, setPrice] = useState(0);
  const [canBuy, setCanBuy] = useState(true);
  const [isBuying, setIsBuying] = useState(false);

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
       <OrderSummary ingredients={ingredients} price={price} />
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