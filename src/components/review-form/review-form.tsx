import Star from 'components/star/star';
import { RatingTitles } from 'const';
import { FormEvent, ChangeEvent, useState, useRef, ReactNode } from 'react';


// ❔ Для корректной работы кнопки Submit пришлось использовать useRef параллельно с useState.
// Хорошо ли это?
function ReviewForm() {
  const [text, setText] = useState('');
  const textRef = useRef('');
  const ratingRef = useRef(0);

  const [disabled, setDisabled] = useState(true);


  // ❔ Вынести обработчики в отдельный файл?
  const checkDisabled = () => {
    if ((textRef.current.length >= 50) && (ratingRef.current > 0)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleInput = (evt: FormEvent<HTMLTextAreaElement>) => {
    const inputText = evt.currentTarget.value;

    setText(inputText);
    textRef.current = inputText;

    checkDisabled();
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(evt.target.value, 10);

    ratingRef.current = value;
    checkDisabled();
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleChange}>

        {/* ❔ с map() не получилось, пришлось использовать reduceRight(). Хорошо ли это? */}
        {RatingTitles.reduceRight((stars: ReactNode[], title, index) => {
          stars.push(<Star value={index + 1} key={title} />);
          return stars;
        }, [])}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={text} onInput={handleInput}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
}


export default ReviewForm;
