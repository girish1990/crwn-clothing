import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KSKqwSG58IF79fYjA9UBzuUL6qnrMdK2bm5rcuEEltpXuXncryCQJDuVMdW0IH4ry56Z4CwBujbf46Ujz4UsYkd00GhyrtRoJ";

    onToken = token => {
        console.log(token);
        alert('Payment Success!!');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description="{`Your total is $${price}`}"
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;