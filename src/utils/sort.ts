import { ShortOffer } from 'types/offer';


export const SortToHighPrice = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  leftOffer.price - rightOffer.price;

export const SortToLowPrice = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  rightOffer.price - leftOffer.price;

export const SortToTop = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  rightOffer.rating - leftOffer.rating;
