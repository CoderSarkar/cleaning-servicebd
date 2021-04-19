import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie1hVE21mYKPZGi1ACj01h0hEDV8hF2sMEiznI8cuX3a5Rg583si5SnWoHA8p6Q6iffm3IBnCa660FzhGPsaOTc00dIShbi3N');

const Payment = ({handelPaymentSuccess}) => {
    return (
        <Elements  stripe={stripePromise} >
           
             <SimpleCardForm handelPaymentSuccess={handelPaymentSuccess}></SimpleCardForm>  
        </Elements>
    );
};

export default Payment;