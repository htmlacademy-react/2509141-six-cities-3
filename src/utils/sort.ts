import { ShortOffer } from 'types/offer';


export const sortToHighPrice = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  leftOffer.price - rightOffer.price;

export const sortToLowPrice = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  rightOffer.price - leftOffer.price;

export const sortToTop = (leftOffer: ShortOffer, rightOffer: ShortOffer) =>
  rightOffer.rating - leftOffer.rating;
