import { memo } from 'react';
import { RatingTitles } from 'const';
import Star from './star/star';


type StarsProps = {
  formDisabled: boolean;
  onClick: (value: number) => void;
}

function Stars({ formDisabled, onClick }: StarsProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingTitles.map((title) => <Star disabled={formDisabled} title={title} key={title.value} onClick={onClick} />)}
    </div>
  );
}


export const MemoStars = memo(Stars);

