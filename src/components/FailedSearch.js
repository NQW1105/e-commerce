import { Button } from 'react-bootstrap';

const FailedSearch = (props) => {
  const resetSearch = props.resetSearch;

  return (
    <div className="h-100 order-md-2 d-flex flex-column justify-content-center align-items-center">
      <h5 className="">No matching results...</h5>
      <Button onClick={resetSearch}>New Search</Button>
    </div>
  );
};

export default FailedSearch;
