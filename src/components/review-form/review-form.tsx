import Star from 'components/star/star';
import { RatingTitles } from 'const';
import { FormEvent, ChangeEvent, useState } from 'react';


function ReviewForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);


  const isDisabled = () => {
    const isMinLength = text.length >= 50;
    const isRatingSelected = rating > 0;

    return !(isMinLength && isRatingSelected);
  };

  // ❔ Вынести обработчики в отдельный файл?
  const handleTextareaInput = (evt: FormEvent<HTMLTextAreaElement>) => {
    const inputText = evt.currentTarget.value;

    setText(inputText);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;

    setRating(value);
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleInputChange}>
        {RatingTitles.map((title) => <Star title={title} key={title.value} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={text} onInput={handleTextareaInput}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled()}>Submit</button>
      </div>
    </form>
  );
}


export default ReviewForm;
