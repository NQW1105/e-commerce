import { Button } from 'react-bootstrap';

const FailedSearch = (props) => {
  const resetSearch = props.resetSearch;

  return (
    <div className="order-md-2 d-flex flex-column justify-content-center align-items-center">
      <h5 className="py-4">No matching results...</h5>
      <Button
        onClick={resetSearch}
        className="borderless-btn bg-alt-action border-alt-action text-white fw-semibold"
      >
        New Search
      </Button>
    </div>
  );
};

export default FailedSearch;
