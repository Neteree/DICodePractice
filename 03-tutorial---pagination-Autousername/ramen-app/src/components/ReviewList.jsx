import ReviewCard from "./ReviewCard";
import "./ReviewList.css";

const ReviewList = ({ counter, reviews }) => {
  const limitedArray = reviews.slice(0, counter);

  return (
    <div className="review-list">
      {limitedArray.map((review, index) => {
        return <ReviewCard key={index} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
