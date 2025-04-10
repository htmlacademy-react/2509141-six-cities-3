import { Fragment } from 'react';


type StarProps = {
  value: number;
  title: string;
}

function Star({value, title}: StarProps) {
  const id = `${value}-stars`;

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio"/>
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}


export default Star;
