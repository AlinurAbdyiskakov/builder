import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <AnimalPreview ingredients={{
          almaz1: 180,
          amber1: 140,
          izmurud1: 80,
          rubin1: 130,
          silver2: 60,
          zoloto2: 90,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}

export default CheckoutSummary;