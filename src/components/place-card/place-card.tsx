import BookmarkButton from 'components/bookmark-button/bookmark-button';
import PremiumMark from 'components/premium-mark/premium-mark';
import { Link } from 'react-router-dom';
import { ShortOffer } from 'types/offer';
import { AppRoute, PlaceCardSource } from 'const';
import { getPercentRating } from 'utils/util';


type PlaceCardProps = {
  offer: ShortOffer;
  source: PlaceCardSource;
  onListItemHover?: (offer: ShortOffer) => void;
}

function PlaceCard({offer, source, onListItemHover}: PlaceCardProps) {
  const isFavorite = (source === PlaceCardSource.Favorites);
  const cardInfoClass = isFavorite ? 'favorites__card-info' : '';
  const width = isFavorite ? 150 : 260;
  const height = isFavorite ? 110 : 200;

  const handleListItemHover = () => {
    onListItemHover?.(offer);
  };

  return (
    <article
      className={`${source}__card place-card`}
      onMouseEnter={(handleListItemHover)}
    >
      <PremiumMark isPremium={offer.isPremium} isCardMode />
      <div className={`${source}__image-wrapper place-card__image-wrapper`}>
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
            <span style={{width: getPercentRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {/*TODO: &amp;
           <a href="#">Beautiful &amp; luxurious apartment at great location</a> */}
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
