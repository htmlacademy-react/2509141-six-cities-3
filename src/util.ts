import { MAX_RATING } from 'const';


export const getPercentRating = (rating: number, maxRating: number = MAX_RATING) =>
  `${(Math.round(rating) / maxRating) * 100}%`;

