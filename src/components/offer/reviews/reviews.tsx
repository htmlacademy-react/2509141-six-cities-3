import { useAppSelector } from 'hooks';
import { getReviews } from 'store/slices/review-slice/selectors';
import { MemoReviewForm } from './review-form/review-form';
import ReviewList from './review-list/review-list';


function Reviews() {
  const reviews = useAppSelector(getReviews);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ReviewList reviews={reviews} />

      <MemoReviewForm />
    </section>
  );
}


export default Reviews;
