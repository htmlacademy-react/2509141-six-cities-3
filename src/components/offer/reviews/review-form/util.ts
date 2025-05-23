export const isValid = (text: string, rating: number) => {
  const isMinLength = text.length >= 50;
  const isRatingSelected = rating > 0;

  return isMinLength && isRatingSelected;
};
