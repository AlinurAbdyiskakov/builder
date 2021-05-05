import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";

import ChacoutForm from "./ChackoutForm/ChackoutForm";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
      <AnimalPreview animals={{
          Dog: 1,
          Pig: 1,
          Mouse:1,
          Cat:1,
          Reccoon: 1,
          Parrot:1,
        }} price={342} />
      </div>
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;