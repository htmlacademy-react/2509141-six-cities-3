import { RatingTitles } from 'const';
import { Fragment } from 'react';


type StarProps = {
  value: number;
}

function Star({value}: StarProps) {
  const indexOfTitle = value - 1;
  const id = `${value}-stars`;

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio"/>
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={RatingTitles[indexOfTitle]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}


export default Star;
