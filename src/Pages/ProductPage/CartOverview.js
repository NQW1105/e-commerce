import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Container, Row } from 'react-bootstrap';

import { payments } from '../../firebaseConfig';
// import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { createCheckoutSession } from '@stripe/firestore-stripe-payments';
import CartUpdate from '../../components/CartOverview/CartUpdate';
import EmptyCart from '../../components/CartOverview/EmptyCart';
import CartHeadings from '../../components/CartOverview/CartHeadings';
import OrderSummary from '../../components/CartOverview/OrderSummary';
import OrderDetails from '../../components/CartOverview/OrderDetails';

const CartOverview = () => {
  const totalOrder = useContext(AppContext).totalOrder;
  const setTotalOrder = useContext(AppContext).setTotalOrder;

  const [showCartUpdate, setShowCartUpdate] = useState(false);
  const [removeUpdate, setRemoveUpdate] = useState(false);
  const [userError, setUserError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  // console.log(userError);

  const checkOut = async () => {
    setDisableBtn(true);
    try {
      const checkoutItems = totalOrder.map((order) => {
        return {
          price: order.stripeId,
          quantity: order.quantity,
        };
      });

      const session = await createCheckoutSession(payments, {
        mode: 'payment',
        line_items: checkoutItems,
        success_url: `${window.location.origin}?success=true`,
        cancel_url: `${window.location.origin}?cancel=true`,
      });

      window.location.assign(session.url);
    } catch (error) {
      setUserError(true);
    }
    setDisableBtn(false);
  };

  return (
    <Container className="py-5">
      <CartUpdate
        showCartUpdate={showCartUpdate}
        setShowCartUpdate={setShowCartUpdate}
        removeUpdate={removeUpdate}
        setRemoveUpdate={setRemoveUpdate}
        userError={userError}
        setUserError={setUserError}
      />

      <CartHeadings
        checkOut={checkOut}
        disableBtn={disableBtn}
        setDisableBtn={setDisableBtn}
        totalOrder={totalOrder}
      />

      {totalOrder.length === 0 ? (
        <EmptyCart />
      ) : (
        <Row className="pt-5">
          <OrderDetails
            totalOrder={totalOrder}
            setTotalOrder={setTotalOrder}
            setShowCartUpdate={setShowCartUpdate}
            setRemoveUpdate={setRemoveUpdate}
          />
          <OrderSummary
            checkOut={checkOut}
            disableBtn={disableBtn}
            setDisableBtn={setDisableBtn}
            totalOrder={totalOrder}
          />
        </Row>
      )}
    </Container>
  );
};

export default CartOverview;
