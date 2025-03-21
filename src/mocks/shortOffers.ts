import { CityName, OfferType } from 'const';
import { ShortOffers } from 'types/offer';


export const shortOffers: ShortOffers = [
  {
    id: '3e285b8b-ffd0-4ad5-aa9d-831682231d85',
    title: 'Tile House',
    type: OfferType.Room,
    price: 141,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1
  },
  {
    id: '1402ec9f-ae62-4bed-8867-e546e109032b',
    title: 'The house among olive ',
    type: OfferType.House,
    price: 863,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.9
  },
  {
    id: '106d86c1-32d9-4502-a976-90b476426799',
    title: 'Loft Studio in the Central Area',
    type: OfferType.House,
    price: 544,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1
  },
  {
    id: '1ae168ae-94c4-43d0-859a-e3fd32745ddb',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: OfferType.Apartment,
    price: 233,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1
  },
];
