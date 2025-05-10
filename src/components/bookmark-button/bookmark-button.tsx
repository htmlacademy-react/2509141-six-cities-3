import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addToFavoritesAction, removeFromFavoritesAction } from 'store/api-actions';
import { AppRoute, AuthorizationStatus } from 'const';


type BookmarkButtonProps = {
  offerId: string;
  isFavoriteInitially: boolean;
  isCardMode: boolean;
}

function BookmarkButton({ offerId, isFavoriteInitially, isCardMode } : BookmarkButtonProps) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteInitially);

  const title = isFavorite ? 'In' : 'To';

  const type = isCardMode ? 'place-card' : 'offer';

  let activeClass = isCardMode ? `${type}__bookmark-button--active` : `${type}__bookmark-button--active`;
  activeClass = isFavorite ? activeClass : '';

  const width = isCardMode ? 18 : 31;
  const height = isCardMode ? 19 : 33;


  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.authorizationStatus);

  const handleBookmarkClick = () => {
    if (auth !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    const action = isFavorite ? removeFromFavoritesAction(offerId) : addToFavoritesAction(offerId);

    dispatch(action)
      .then(() => setIsFavorite(!isFavorite));
  };


  return (
    <button className={`${type}__bookmark-button ${activeClass} button`} type="button" onClick={handleBookmarkClick}>
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{title} bookmarks</span>
    </button>
  );
}


export default BookmarkButton;
