import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout'


const PaypalCheckoutButton = ({ cart, setCart}) => {
const paypalConf = {
    currency: 'CO',
    env: 'sandbox',
    client: {
        sandbox:'Ad1oB5ygBB9C3DZrJZ1EwX7TeOGhlR49fAWjEIsTPq6DjqkuqUSZ2esslzpjTXaQNCDuizbuHp282QK3',
        production: '--id--',
    },
    style: {
        label: 'pay',
        size: 'medium',
        shape:'react',
        color:'gold'

    }
};
const PaypalButton = paypal.Button.driver('react',{React,ReactDOM});
const payment = (data, actions) => {
const payment = {
    transactions: [
        {
            amount:{
                total: '0.01',
                currency: paypalConf.currency,
            },
            
        }
    ],
    note_to_payer: 'contactenos'
};
return actions.payment.create({payment});
};
const onAuthorize = (data, actions) => {
return  actions.payment.execute()
.then(response => {
  console.log(response);  
  alert('El pago fue procesado, ID: ${response.id}' );
})
.catch(error => {
    console.log(error);
    alert('ocurrio un error');
});
};
const onError = (error) => {
    console.log(error);
    alert('El pago no fue realizado, intente de nuevo')
};
const onCancel = (data , actions) => {
    alert ('Pago no realizado')
};
return (
    <PaypalButton
    env={paypalConf.env}
    client={paypalConf.client}
    payment={(data,actions) => payment(data, actions)}
    onAuthorize={(data,actions) => onAuthorize(data, actions)}
    onCancel={(data,actions) => onCancel(data, actions)}
    onError={(error) => onError(error)}
    stile={paypalConf.style}
    commit
    locate="MXN"
    />
)

};

export default PaypalCheckoutButton;