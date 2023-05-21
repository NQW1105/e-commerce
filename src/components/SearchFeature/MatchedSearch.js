import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Image, Spinner } from 'react-bootstrap';
import { storage } from '../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';

const MatchedProduct = (props) => {
  const product = props.product;
  const [productImg, setProductImg] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, `${product.id}.webp`))
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
    <Row className="py-2 mx-2 mx-md-0">
      <hr className="mt-1 mb-3 px-0"></hr>
      <Col
        xs={3}
        className="px-0 d-flex justify-content-center align-items-center"
      >
        {productImg ? (
          <LinkContainer
            to={`/product/${product.id}`}
            style={{ height: '6rem' }}
          >
            <Image src={productImg} />
          </LinkContainer>
        ) : (
          <Spinner animation="border" />
        )}
      </Col>
      <Col xs={7} className="d-flex flex-column justify-content-center px-0">
        <p className="">{product.stripe_metadata_brand}</p>
        <p className="">{product.name}</p>
      </Col>
      <Col
        xs={2}
        className="d-flex justify-content-center align-items-center px-0"
      >
        <p className="">${product.stripe_metadata_price}</p>
      </Col>
    </Row>
  );
};

export default MatchedProduct;
