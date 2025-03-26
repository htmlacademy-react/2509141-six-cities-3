import { Link } from 'react-router-dom';
import PremiumMark from 'components/premium-mark/premium-mark';
import { ShortOffer } from 'types/offer';
// ❔ без .ts
// Module '"util"' has no exported member 'getPercentRating'.ts(2305)
import { getPercentRating } from 'util.ts';
import BookmarkButton from 'components/bookmark-button/bookmark-button';


type PlaceCardProps = {
  offer: ShortOffer;
  isFavoritePage: boolean;
  onMouseEnter?: () => void;
}

function PlaceCard({offer, isFavoritePage, onMouseEnter}: PlaceCardProps) {
  const cardClass = isFavoritePage ? 'favorites' : 'cities';
  const cardInfoClass = isFavoritePage ? 'favorites__card-info' : '';
  const width = isFavoritePage ? 150 : 260;
  const height = isFavoritePage ? 110 : 200;

  return (
    <article
      className={`${cardClass}__card place-card`}
      onMouseEnter={onMouseEnter}
    >
      <PremiumMark isPremium={offer.isPremium} isCardMode />
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
          <BookmarkButton isFavorite={offer.isFavorite} isCardMode />
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
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
