import { CityName, OfferType } from 'const';


export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: Location;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type BaseOffer = {
  id: string;
  title: string;
  type: OfferType; // ❔ Использовал enum для типизации свойства объекта. Хорошо ли это?
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type ShortOffer = BaseOffer & {
  previewImage: string;
};

export type FullOffer = BaseOffer & {
  description: string;
  images: string[];
  goods: string[];
  bedrooms: number;
  host: Host;
  maxAdults: number;
};

export type ShortOffers = ShortOffer[];
export type FullOffers = FullOffer[];
