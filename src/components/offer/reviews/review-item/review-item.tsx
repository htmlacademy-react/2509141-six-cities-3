import dayjs from 'dayjs';
import { Review } from 'types/review';
import { getPercentRating } from 'utils/util';


type ReviewItemProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewItemProps) {
  const user = review.user;
  const date = dayjs(review.date);
  const backDate = date.format('YYYY-MM-DD');
  const frontDate = date.format('MMMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getPercentRating(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={backDate}>{frontDate}</time>
      </div>
    </li>
  );
}


export default ReviewItem;
