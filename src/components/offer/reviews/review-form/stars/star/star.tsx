import { Fragment } from 'react';
import { RatingTitle } from 'types/review';


type StarProps = {
  title: RatingTitle;
  disabled: boolean;
  onClick: (value: number) => void;
}

function Star({ title: { value, name }, disabled, onClick }: StarProps) {
  const id = `${value}-stars`;

  const handleInputClick = () =>
    onClick(value);

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" disabled={disabled} onClick={handleInputClick} />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={name}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}


export default Star;
