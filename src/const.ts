import { Location } from 'types/offer';


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

export const CityLocations: { [key in CityName]: Location } = {
  [CityName.Amsterdam]: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10
  },
  [CityName.Paris]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  [CityName.Cologne]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  [CityName.Brussels]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  [CityName.Dusseldorf]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
  [CityName.Hamburg]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  }
} as const;


export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}
