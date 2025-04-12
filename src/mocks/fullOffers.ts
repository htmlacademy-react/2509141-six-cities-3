import { CityName, OfferType } from 'const';
import { FullOffers } from 'types/offer';


export const fullOffers: FullOffers = [
  {
    id: '3e285b8b-ffd0-4ad5-aa9d-831682231d85',
    title: 'Tile House',
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    type: OfferType.Room,
    price: 141,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
    city: {
      name: CityName.Hamburg,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    },
    goods: [
      'Fridge',
      'Washer',
      'Dishwasher',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.1,
    bedrooms: 1,
    maxAdults: 1
  },
  {
    id: '1402ec9f-ae62-4bed-8867-e546e109032b',
    title: 'The house among olive ',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: OfferType.House,
    price: 863,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Dishwasher',
      'Breakfast',
      'Heating',
      'Kitchen',
      'Baby seat',
      'Towels',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 1.9,
    bedrooms: 4,
    maxAdults: 1
  },
  {
    id: '106d86c1-32d9-4502-a976-90b476426799',
    title: 'Loft Studio in the Central Area',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: OfferType.House,
    price: 544,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    goods: [
      'Heating',
      'Fridge',
      'Towels',
      'Washer',
      'Wi-Fi',
      'Breakfast',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.1,
    bedrooms: 2,
    maxAdults: 5
  },
  {
    id: '1ae168ae-94c4-43d0-859a-e3fd32745ddb',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: OfferType.Apartment,
    price: 233,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg'
    ],
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Dishwasher',
      'Heating',
      'Wi-Fi',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 1.1,
    bedrooms: 4,
    maxAdults: 10
  }
];
