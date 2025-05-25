import { ShortOffer } from 'types/offer';
import { Review } from 'types/review';


export const sortToHighPrice = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  leftOffer.price - rightOffer.price;

export const sortToLowPrice = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  rightOffer.price - leftOffer.price;

export const sortToTop = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  rightOffer.rating - leftOffer.rating;

export const sortReviews = (leftReview: Review, rightReview: Review) => {
  const leftDate = new Date(leftReview.date);
  const rightDate = new Date(rightReview.date);

  return rightDate.getTime() - leftDate.getTime();
};
