import { CityName, MAX_RATING } from 'const';
import { ShortOffers } from 'types/offer';


export const getPercentRating = (rating: number, maxRating: number = MAX_RATING) =>
  `${(Math.round(rating) / maxRating) * 100}%`;

export const findOffersInCity = (allOffers: ShortOffers, activeCity: CityName) =>
  allOffers.filter((offer) => offer.city.name === activeCity);

export const findOffer = (allOffers: ShortOffers, id: string) =>
  allOffers.find((offer) => offer.id === id);

export const upFirstLetter = (string: string) =>
  string.replace(string[0], string[0].toUpperCase());

