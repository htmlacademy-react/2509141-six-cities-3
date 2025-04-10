import { CityName } from 'const';
import { Location } from 'types/offer';


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
