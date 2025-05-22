import { MAX_REVIEWS_COUNT } from 'const';
import { useAppSelector } from 'hooks';
import { getReviews } from 'store/slices/review-slice/selectors';
import ReviewForm from 'components/review-form/review-form';
import ReviewItem from 'components/review/review';


function ReviewList() {
  const reviews = useAppSelector(getReviews);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.slice(0, MAX_REVIEWS_COUNT).map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>

      <ReviewForm />

    </section>
  );
}


export default ReviewList;
