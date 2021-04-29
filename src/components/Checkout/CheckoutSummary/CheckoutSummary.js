import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";

import ChacoutForm from "./ChackoutForm/ChackoutForm";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
      <AnimalPreview ingredients={{
          Dog: 8,
          Pig: 7,
          Mouse:6,
          Cat:2,
          Reccoon: 6,
          Parrot:4,
        }} price={342} />
      </div>
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;