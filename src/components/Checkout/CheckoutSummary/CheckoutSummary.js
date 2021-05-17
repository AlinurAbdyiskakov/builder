import ChacoutForm from "./ChackoutForm/ChackoutForm";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
    
      <AnimalPreview animals={{
      dog: 1,
      chameleon: 1,
      turtle:1,
      Cat:1,
      reccoon: 1,
      hamster:1,
      }} price={342} />
      
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;