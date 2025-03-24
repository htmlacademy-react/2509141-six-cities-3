import PremiumMark from './premiumMark';
import { ShortOffer } from 'types/offer';
// ❔ без .ts
// Module '"util"' has no exported member 'getPercentRating'.ts(2305)
import { getPercentRating } from 'util.ts';


type PlaceCardProps = {
  offer: ShortOffer;
  isFavoriteView: boolean;
  onMouseEnter?: () => void;
}

function PlaceCard({offer, isFavoriteView, onMouseEnter}: PlaceCardProps) {
  const bookmarkButtonTitle = offer.isFavorite ? 'In' : 'To';
  const activeClass = offer.isFavorite ? 'place-card__bookmark-button--active' : '';
  const cardClass = isFavoriteView ? 'favorites' : 'cities';
  const cardInfoClass = isFavoriteView ? 'favorites__card-info' : '';
  const width = isFavoriteView ? 150 : 260;
  const height = isFavoriteView ? 110 : 200;

  return (
    <article
      className={`${cardClass}__card place-card`}
      onMouseEnter={onMouseEnter}
    >
      <PremiumMark isPremium={offer.isPremium} />
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={width} height={height} alt="Place image"/>
        </a>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${activeClass} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{bookmarkButtonTitle} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getPercentRating(offer.rating).toString()}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {/*TODO: &amp;
           <a href="#">Beautiful &amp; luxurious apartment at great location</a> */}
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
