import { ChangeEvent, memo } from 'react';
import { RatingTitles } from 'const';
import Star from './star/star';


type StarsProps = {
  formDisabled: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function Stars({ formDisabled, onChange }: StarsProps) {
  return (
    <div className="reviews__rating-form form__rating" onChange={onChange}>
      {RatingTitles.map((title) => <Star disabled={formDisabled} title={title} key={title.value} />)}
    </div>
  );
}


export const MemoStars = memo(Stars);

