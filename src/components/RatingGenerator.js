import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const RatingGenerator = (props) => {
  // console.log(props);
  const {
    ratings: { fiveStar, fourStar, threeStar, twoStar, oneStar },
  } = props;
  const totalRating = oneStar + twoStar + threeStar + fourStar + fiveStar;

  let netRating =
    (oneStar + twoStar * 2 + threeStar * 3 + fourStar * 4 + fiveStar * 5) /
    totalRating;
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (netRating - 1 >= 0) {
      stars.push(<BsStarFill />);
      netRating -= 1;
    } else if (netRating >= 0.5) {
      stars.push(<BsStarHalf />);
      netRating -= 0.5;
    } else {
      stars.push(<BsStar />);
    }
  }

  return (
    <div className="d-flex align-items-center">
      {stars}
      <span className="px-1">({totalRating})</span>
    </div>
  );
};

export default RatingGenerator;
