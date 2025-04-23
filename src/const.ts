export enum MapSource {
  Main = 'cities',
  Offer = 'offer'
}

export const MAX_REVIEWS_COUNT = 10;
export const MAX_NEAR_PLACES_COUNT = 3;

export const MAX_RATING = 5;
export const RatingTitles = [
  {value: 5, name: 'perfect'},
  {value: 4, name: 'good'},
  {value: 3, name: 'not bad'},
  {value: 2, name: 'badly'},
  {value: 1, name: 'terribly'}
];

export enum PlaceCardSource {
  Main = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places'
}

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
export const DEFAULT_CITY = CityName.Paris;

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
