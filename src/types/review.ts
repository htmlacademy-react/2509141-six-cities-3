export type RatingTitle = {
  value: number;
  name: string;
}
export type RatingTitles = RatingTitle[];

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type Reviews = Review[];
