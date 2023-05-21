import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { db } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import RatingGenerator from '../../components/RatingGenerator';
import { AppContext } from '../../context/AppContext';
import Error from '../Error';
import ProductDetails from '../../components/ProductHighlight/ProductDetails';
import AddCartModal from '../../components/ProductHighlight/AddCartModal';
import OrderForm from '../../components/ProductHighlight/OrderForm';
import { storage } from '../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';

const ProductHighlight = () => {
  const totalOrder = useContext(AppContext).totalOrder;
  const setTotalOrder = useContext(AppContext).setTotalOrder;

  let { productId } = useParams();
  // console.log(productId);

  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [unit, setUnit] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [showOrder, setShowOrder] = useState(false);
  const [productImg, setProductImg] = useState('');
  const [radioValue, setRadioValue] = useState('0');
  const radios = [
    { name: 'Chocolate', value: '0' },
    { name: 'Vanilla', value: '1' },
  ];

  const handleClose = () => setShowOrder(false);
  const handleShow = () => setShowOrder(true);

  const updateUnit = (event) => {
    if (event.target.id === 'increment') {
      setUnit(unit + 1);
    } else if (event.target.id === 'decrement') {
      setUnit(unit - 1);
    }
  };

  const addOrder = (event) => {
    event.preventDefault();
    const newOrder = {
      id: productId,
      image: product.stripe_metadata_image,
      name: product.name,
      flavor: radios[radioValue].name,
      price: product.stripe_metadata_price,
      quantity: unit,
      stripeId: product.stripeId,
    };

    if (
      // Checks whether newOrder matches any of the product and flavor in existing cart
      totalOrder.filter(
        (order) =>
          order.name === newOrder.name && order.flavor === newOrder.flavor
      ).length > 0
    ) {
      const updatedOrder = totalOrder.map((order) => {
        if (order.name === newOrder.name && order.flavor === newOrder.flavor) {
          return {
            ...order,
            quantity: order.quantity + newOrder.quantity,
          };
        } else {
          return { ...order };
        }
      });
      setTotalOrder(updatedOrder);
    } else {
      setTotalOrder(totalOrder.concat(newOrder));
    }
  };

  useEffect(() => {
    unit === 1 ? setDisabledBtn(true) : setDisabledBtn(false);

    const getProduct = async () => {
      try {
        // Selects 'products' collection then search for product doc
        const productRef = await getDoc(doc(db, 'products', `${productId}`));

        // Selects 'products' collection then selects 'prices' subcollection as reference
        const subColRef = await getDocs(
          collection(db, 'products', `${productId}`, 'prices')
        );
        const stripeRef = subColRef.docs[0].id;

        setProduct({
          ...productRef.data(),
          id: productId,
          stripeId: stripeRef,
        });
        if (error) setError(false);
      } catch (error) {
        setError(true);
      }
    };

    const getImage = () => {
      getDownloadURL(ref(storage, `${productId}.webp`))
        .then((url) => {
          setProductImg(url);
          // console.log(url);
        })
        .catch((error) => {
          // Handle any errors
        });
    };

    if (Object.keys(product).length === 0 || productId !== product.id)
      getProduct();
    if (productImg !== productId) getImage();
  }, [productId, product, unit, error, productImg]);

  if (error) return <Error />;

  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image
            // src={product.stripe_metadata_image}
            src={productImg}
            alt="product-image"
            style={{ height: '21rem' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <h3>{product.name}</h3>
          <RatingGenerator key={product.id} ratings={product.ratings} />
          <p className="py-3 text-justify">
            {product.stripe_metadata_overview}
          </p>
          <h3>${product.stripe_metadata_price}</h3>
          <OrderForm
            radios={radios}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
            unit={unit}
            updateUnit={updateUnit}
            addOrder={addOrder}
            handleShow={handleShow}
            disabledBtn={disabledBtn}
          />
          <AddCartModal
            product={product}
            unit={unit}
            radios={radios}
            radioValue={radioValue}
            showOrder={showOrder}
            handleClose={handleClose}
          />
          <ProductDetails product={product} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductHighlight;
