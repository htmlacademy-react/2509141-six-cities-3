import { useAppDispatch } from 'hooks';
import { toggleFavoriteStatusAction } from 'store/api-actions';


type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  isCardMode: boolean;
}

function BookmarkButton({ offerId, isFavorite, isCardMode } : BookmarkButtonProps) {
  const title = isFavorite ? 'In' : 'To';

  const type = isCardMode ? 'place-card' : 'offer';

  let activeClass = isCardMode ? `${type}__bookmark-button--active` : `${type}__bookmark-button--active`;
  activeClass = isFavorite ? activeClass : '';

  const width = isCardMode ? 18 : 31;
  const height = isCardMode ? 19 : 33;


  const dispatch = useAppDispatch();
  const handleBookmarkClick = () => {
    dispatch(toggleFavoriteStatusAction({ id: offerId, isFavorite }));
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
