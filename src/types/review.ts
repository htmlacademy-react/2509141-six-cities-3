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

export type BaseReviewInfo = {
  comment: string;
  rating: number;
};

export type Review = BaseReviewInfo & {
  id: string;
  date: string;
  user: User;
};
export type Reviews = Review[];


export enum ReviewSendingStatus {
  none,
  sending,
  sent,
  error
}
