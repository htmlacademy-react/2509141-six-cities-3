export const MAX_REVIEWS_COUNT = 10;

export const MAX_RATING = 5;
export const RatingTitles = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export enum PlaceCardSource {
  Main = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places'
}
export const NEAR_PLACES_COUNT = 3;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}
export const DEFAULT_CITY = CityName.Amsterdam;

export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel'
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';
