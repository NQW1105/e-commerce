import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import RatingGenerator from './RatingGenerator';
import { LinkContainer } from 'react-router-bootstrap';
import { storage } from '../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';

const ProductCard = (props) => {
  // console.log(props);
  const {
    productObj: {
      id,
      metadata: { image },
      metadata: { price },
      name,
      ratings,
    },
  } = props;

  const [productImg, setProductImg] = useState('');

  useEffect(() => {
    getDownloadURL(ref(storage, `${id}.webp`))
      .then((url) => {
        setProductImg(url);
        // productImg = url;
        // console.log(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  });

  return (
    <Card
      border="0 bg-alt-bg"
      // style={{ width: '16rem' }}
    >
      <LinkContainer to={`/product/${id}`}>
        <Card.Img
          variant="top"
          src={productImg}
          // onError={`../images/products/${id}.webp`}
          className="cursor-pointer img-fluid"
        />
      </LinkContainer>
      <Card.Body className="text-wrap">
        <Card.Title style={{ height: '3rem' }} className="text-overflow">
          {name}
        </Card.Title>
        <Card.Text className="d-flex align-items-center">
          <RatingGenerator key={id} ratings={ratings} />
        </Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
