import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import styled from 'styled-components';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { useNavigate } from 'react-router-dom';



const App = () => {
 const publicKey = import.meta.env.VITE_APP_PAYSTACK_PUBLIC_KEY;

 const { total_amount, clearCart } = useCartContext();

 const [email, setEmail] = useState('');
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [address, setAddress] = useState('')

 const amount = total_amount;

 const resetForm = () => {
  setEmail('');
  setName('');
  setPhone('');
  setAddress('')
  clearCart()
 };

 const componentProps = {
  email,
  amount,
  metadata: {
   name,
   phone,
  },
  publicKey,
  text: 'Place Order',
  onSuccess: ({ reference }) => {
   alert(
    `Your purchase was successful! Transaction reference: ${reference}`
   );
   resetForm();
  },
  onClose: () => alert("Wait! You need this oil, don't go!!!!"),
 };

 return (
  <Wrapper className="">
   <div className="container">
    <div className="checkout">
     <div className="checkout-form">
      <p className="text-center top-title">Complete Purchase</p>
      <div className="checkout-field">
       <label>Name</label>
       <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
       />
      </div>
      <div className="checkout-field">
       <label>Email</label>
       <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
       />
      </div>
      <div className="checkout-field">
       <label>Phone</label>
       <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter your phone'
       />
      </div>
      <div className="checkout-field">
       <label>Delivery Adress</label>
       <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder='Enter delivery address'
       />
      </div>

      <PaystackButton className="paystack-button" {...componentProps} />
     </div>
    </div>
   </div>
  </Wrapper>
 );
};

const Wrapper = styled.section`
 

.checkout {
  text-align: center;
  letter-spacing: 0.1rem;
}

.checkout {
  display: flex;
  flex-direction: row;
  margin: 5% auto;
  width: 100%;
  height: 430px;
  background: white;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
}


.checkout {
  background: var(--gray-light);

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 430px;
  width: 75%;
}

.checkout-form {
  padding: 20px 20px;
}

.checkout-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.checkout-field label {
  text-align: left;
  color: #e0eafc;
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.checkout-field input {
  background-color: transparent;
  border: 1px solid var(--dark);
  border-radius: 5px;
  color: black;
  height: 35px;
  padding: 0 .5rem ;
}

.paystack-button {
  cursor: pointer;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background-color: var(--dark);
  font-weight: bold;
  color: var(--gray-light);
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  margin-top: 40px;
}

`

export default App;
