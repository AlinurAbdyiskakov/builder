import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";

import ChacoutForm from "./ChackoutForm/ChackoutForm";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
    
      <AnimalPreview animals={{
          Dog: 1,
          Chameleon: 1,
          Mouse:1,
          Cat:1,
          Reccoon: 1,
          Hamster:1,
        }} price={342} />
      
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;