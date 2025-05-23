import { MAX_REVIEWS_COUNT } from 'const';
import { Reviews } from 'types/review';
import ReviewItem from '../review-item/review-item';


type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_REVIEWS_COUNT).map((review) => <ReviewItem review={review} key={review.id} />)}
    </ul>
  );
}


export default ReviewList;
