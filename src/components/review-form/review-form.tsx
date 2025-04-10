/* eslint-disable no-console */
import Star from 'components/star/star';
import { RatingTitles } from 'const';
import { FormEvent, ChangeEvent, useState, useRef, ReactNode } from 'react';


function ReviewForm() {
  const [text, setText] = useState('');
  const textRef = useRef('');

  const ratingRef = useRef(0);

  const [disabled, setDisabled] = useState(true);


  // ❔ Вынести обработчики в отдельный файл?
  const checkDisabled = () => {
    // ❔ Как обойтись без useRef? State не обновляется вовремя.
    console.log('State:', text.length); // Всё ещё 0
    console.log('Ref:', textRef.current.length); // Уже > 0


    const isMinLength = text.length >= 50;
    const isRatingSelected = ratingRef.current > 0;

    if (isMinLength && isRatingSelected) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleTextareaInput = (evt: FormEvent<HTMLTextAreaElement>) => {
    const inputText = evt.currentTarget.value;

    setText(inputText);
    textRef.current = inputText;

    checkDisabled();
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(evt.target.value, 10);

    ratingRef.current = value;
    checkDisabled();
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleInputChange}>

        {RatingTitles.reduceRight((stars: ReactNode[], title, index) => {
          stars.push(<Star value={index + 1} title={title} key={title} />);
          return stars;
        }, [])}
        {/* {RatingTitles.map((title, index) => <Star value={index + 1} title={title} key={title} />)} */}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={text} onInput={handleTextareaInput}></textarea>
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
