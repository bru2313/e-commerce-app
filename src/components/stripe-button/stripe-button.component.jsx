import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ReactComponent as Logo } from '../../assets/arlogo.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EOKK0gPB7E6UOaKepygyZiMb00fZXNPPNU';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Adaptive Response'
            billoingAddress
            shippingAddress
            image='https://www.adaptiveresponse.net/img/arlogo3.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            paneLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    );
};

export default StripeCheckoutButton;