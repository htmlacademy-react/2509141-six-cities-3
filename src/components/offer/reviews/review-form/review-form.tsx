import { FormEvent, ChangeEvent, useState, useRef, useEffect, useCallback, memo } from 'react';
import { getErrorStatus, getSendingStatus } from 'store/slices/review-slice/selectors';
import { getAuthStatus } from 'store/slices/user-slice/selectors';
import { addReviewAction } from 'store/api-actions';
import { BaseReviewInfo } from 'types/review';
import { useAppDispatch, useAppSelector } from 'hooks';
import { AuthorizationStatus } from 'const';
import { isValid } from './util';
import { MemoStars } from './stars/stars';


function ReviewForm() {
  const dispatch = useAppDispatch();

  const isSending = useAppSelector(getSendingStatus);
  const hasError = useAppSelector(getErrorStatus);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  // ❔ Вызывает ререндер при вводе каждого символа. Хорошо ли это?
  const form = useRef<HTMLFormElement | null>(null);

  const formDisabled = isSending;
  const submitDisabled = formDisabled || !isValid(text, rating);


  useEffect(() => {
    if (!hasError) {
      setText('');
      setRating(0);
      form.current?.reset();
    }
  }, [dispatch, isSending, hasError]);

  const handleTextareaInput = (evt: FormEvent<HTMLTextAreaElement>) => {
    const inputText = evt.currentTarget.value;

    setText(inputText);
  };

  // ❔ Не работает, если выбрать ту же звезду сразу после отправки формы
  // Разве form.current?.reset() не должен сбросить последний выбор?
  const handleInputChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const value = +evt.target.value;

      setRating(value);
    },
    []
  );


  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const review: BaseReviewInfo = { comment: text, rating };
    dispatch(addReviewAction(review));
  };


  const auth = useAppSelector(getAuthStatus);
  return (auth !== AuthorizationStatus.Auth)
    ? null
    : (
      <form className="reviews__form form" ref={form} onSubmit={handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <MemoStars formDisabled={formDisabled} onChange={handleInputChange} />
        <textarea
          className="reviews__textarea form__textarea"
          id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={text}
          minLength={50}
          maxLength={300}
          onInput={handleTextareaInput}
          disabled={formDisabled}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={submitDisabled}>Submit</button>
        </div>
      </form>
    );
}


export const MemoReviewForm = memo(ReviewForm);
