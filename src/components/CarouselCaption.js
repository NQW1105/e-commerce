import { Col, Row, Container } from 'react-bootstrap';

const CarouselCaption = () => {
  return (
    <Container>
      <Row className="gap-caption py-3">
        <Col sm={12} lg={4}>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <svg
              fill="currentColor"
              icon-class="bootstrap-outline-truck"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17 0.563l1.481 1.85a1.5 1.5 0 0 1 0.329 0.938V10.5a1.5 1.5 0 0 1 -1.5 1.5H14a2 2 0 1 1 -4 0H5a2 2 0 1 1 -3.998 -0.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 0.732 -0.732V3.5a0.5 0.5 0 0 0 -0.5 -0.5h-9a0.5 0.5 0 0 0 -0.5 0.5v7a0.5 0.5 0 0 0 0.294 0.456zM12 10a2 2 0 0 1 1.732 1h0.768a0.5 0.5 0 0 0 0.5 -0.5V8.35a0.5 0.5 0 0 0 -0.11 -0.312l-1.48 -1.85A0.5 0.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0 -2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0 -2z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="m-0 ">Free Shipping</p>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <svg
              fill="currentColor"
              icon-class="bootstrap-regular-reply-all-fill"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.432 7.262L7.971 10.337C8.442 10.597 9.044 10.281 9.044 9.756V8.555C9.044 8.555 13.516 8.087 16 12.305C15.006 4.805 10.534 4.805 9.044 4.805V3.604C9.044 3.486 9.011 3.37 8.948 3.267C8.886 3.164 8.795 3.079 8.686 3.021C8.63 2.99 8.569 2.967 8.506 2.952C8.448 2.938 8.388 2.931 8.328 2.931C8.203 2.932 8.08 2.964 7.971 3.024L3.432 6.101C3.325 6.161 3.237 6.246 3.175 6.347C3.113 6.449 3.081 6.564 3.081 6.681C3.081 6.799 3.113 6.914 3.175 7.015C3.237 7.117 3.325 7.202 3.432 7.262ZM5.283 3.371C5.267 3.311 5.239 3.255 5.2 3.205C5.122 3.105 5.005 3.038 4.874 3.02C4.744 3.001 4.611 3.032 4.505 3.106L0.536 5.862C0.372 5.959 0.237 6.093 0.143 6.253C0.049 6.412 0 6.592 0 6.774C0 6.957 0.049 7.136 0.143 7.296C0.237 7.455 0.372 7.59 0.536 7.686L4.505 10.442C4.558 10.479 4.618 10.507 4.681 10.523C4.745 10.539 4.812 10.542 4.877 10.533C4.893 10.531 4.909 10.528 4.924 10.525C4.973 10.514 5.019 10.496 5.062 10.472C5.119 10.44 5.168 10.398 5.207 10.347C5.246 10.297 5.275 10.24 5.29 10.18C5.3 10.141 5.305 10.102 5.304 10.062C5.304 10.04 5.302 10.017 5.298 9.995C5.287 9.933 5.264 9.874 5.229 9.822C5.209 9.792 5.186 9.764 5.159 9.739C5.139 9.72 5.118 9.702 5.095 9.687L1.108 6.918C1.094 6.908 1.08 6.899 1.066 6.891C1.044 6.879 1.026 6.862 1.014 6.841C1.002 6.82 0.995 6.797 0.995 6.773C0.995 6.749 1.002 6.726 1.014 6.705C1.026 6.685 1.044 6.667 1.066 6.655C1.071 6.652 1.076 6.649 1.082 6.646C1.09 6.64 1.099 6.635 1.108 6.629L5.095 3.861C5.147 3.825 5.192 3.779 5.226 3.726C5.259 3.673 5.282 3.615 5.292 3.554C5.297 3.521 5.298 3.487 5.296 3.453C5.294 3.426 5.29 3.398 5.283 3.371Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="m-0 ">30 Day Return Policy</p>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <svg
              fill="currentColor"
              icon-class="bootstrap-regular-lightning-fill"
              width="33px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.52 0.359A0.5 0.5 0 0 1 6 0h4a0.5 0.5 0 0 1 0.474 0.658L8.694 6H12.5a0.5 0.5 0 0 1 0.395 0.807l-7 9a0.5 0.5 0 0 1 -0.873 -0.454L6.823 9.5H3.5a0.5 0.5 0 0 1 -0.48 -0.641l2.5 -8.5z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="m-0 ">Fast Shipping</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselCaption;
