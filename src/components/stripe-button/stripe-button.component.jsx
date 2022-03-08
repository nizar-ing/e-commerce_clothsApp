import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Kb8nSDGXSHwGCnXSZNaiklIH2pSHMo1Kaj86xZv8bd3XpMya0XCkNrmmaSJp25hM4EDMhjzjscaUK9BMBXAJbYA00pZzWcQe1';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful ');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='NizarIngApp'
      image='https://svgshare.com/i/CUz.svg'
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token ={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;