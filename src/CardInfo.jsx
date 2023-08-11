import { useState } from 'react';
import './cardinfo.css';
import CreditCardInput from 'react-credit-card-input';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
import CheckoutForm from './ChekoutForm';
import PaymentForm from './PaymentForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//const stripePromise = loadStripe('pk_test_51Ndsm0SCmjG4QlOAprMgMpwyJT5Py7RgdqxSpGLNCZa9PytFGQQFqQNIA1ogScJdohgzXgapvcU4egHVqaJGCBX100tcyvmcR4');
const stripePromise = loadStripe('pk_test_51Ndsm0SCmjG4QlOAprMgMpwyJT5Py7RgdqxSpGLNCZa9PytFGQQFqQNIA1ogScJdohgzXgapvcU4egHVqaJGCBX100tcyvmcR4');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};




const CardInfo = ({pack,handlePayment})=>{
    const [cardNumber, setCardNumber] = useState();
    const [expiry, setExpiry] = useState();
    const [cvc, setcvc] = useState();
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '',
      };
    
  
    return(
        <>
        <div className="container">
            <div className="cardInfo-box">
                <div className="card-detail">
                    <h1>Complete Payment</h1>
                    <p>Enter your credit or debit card details below</p>
                    <CreditCardInput
                        cardNumberInputProps={{ value: cardNumber, onChange: ()=>setCardNumber(cardNumber)}}
                        cardExpiryInputProps={{ value: expiry, onChange: ()=>setExpiry(expiry) }}
                        cardCVCInputProps={{ value: cvc, onChange: ()=>setcvc(cvc) }}
                        fieldClassName="input"
                    />
                     {/* <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements> */}
                
                    <button onClick = {handlePayment}>Confirm Payment</button>
                </div>
                <div className="summary">
                    <h1>Order Summary</h1>
                    <div className='Summary-row'>
                        <p>Plan Name</p>
                        <p><strong>{pack.name}</strong></p>
                    </div>
                    <div className='Summary-row'>
                        <p>Billing Cycle</p>
                        <p><strong>{pack.cycle}</strong></p>
                    </div>
                    <div className='Summary-row'>
                        <p>Plan price</p>
                        <p><strong>{`${pack.price} /${pack.cycle=='Monthly'? 'mo':'yr'}`}</strong></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default CardInfo;