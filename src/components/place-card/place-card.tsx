import BookmarkButton from 'components/bookmark-button/bookmark-button';
import PremiumMark from 'components/premium-mark/premium-mark';
import { Link } from 'react-router-dom';
import { ShortOffer } from 'types/offer';
import { AppRoute, PlaceCardSource } from 'const';
// ❔ без .ts
// Module '"util"' has no exported member 'getPercentRating'.ts(2305)
import { getPercentRating } from 'util.ts';


type PlaceCardProps = {
  offer: ShortOffer;
  source: PlaceCardSource;
  onMouseEnter?: () => void;
}

function PlaceCard({offer, source, onMouseEnter}: PlaceCardProps) {
  // ❔ Допустимо использовать подобный универсальный компонент, или вместо него всегда лучше применять паттерн «Контейнер»?
  // Если заменить предварительные вычисления на 3 прокси-компонента, то вместо одного файла получится четыре.
  // Таким образом отдельные компоненты станут проще, но сама структура проекта - сложнее. Хорошо ли это?
  const isFavorite = (source === PlaceCardSource.Favorites);
  const cardInfoClass = isFavorite ? 'favorites__card-info' : '';
  const width = isFavorite ? 150 : 260;
  const height = isFavorite ? 110 : 200;

  return (
    <article
      className={`${source}__card place-card`}
      onMouseEnter={onMouseEnter}
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
