import BookmarkButton from 'components/bookmark-button/bookmark-button';
import GoodsItem from 'components/goods-item/goods-item';
import OfferImage from 'components/offer-image/offer-image';
import PremiumMark from 'components/premium-mark/premium-mark';
import ReviewForm from 'components/review-form/review-form';
import ReviewList from 'components/review-list/review-list';
import PlaceCard from 'components/place-card/place-card';
import NotFound from 'pages/not-found/not-found';
import { reviews } from 'mocks/reviews';
import { Link, useParams } from 'react-router-dom';
import { ShortOffers, FullOffers } from 'types/offer';
import { PlaceCardSource } from 'const';
import { getPercentRating } from 'utils/util';


type OfferProps = {
  shortOffers: ShortOffers;
  fullOffers: FullOffers;
}

function Offer({shortOffers, fullOffers}: OfferProps) {
  const params = useParams();
  const offer = fullOffers.find(({id}) => id === params.id);
  const invalidId = (offer === undefined);

  if (invalidId) {
    return <NotFound />;
  }

  const host = offer.host;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to='/'>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {/* ❔ key={image} - хорошо ли это? */}
              {offer.images.slice(0, 6).map((image) => <OfferImage image={image} key={image} />)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumMark isPremium={offer.isPremium} isCardMode={false} />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <BookmarkButton isFavorite={offer.isFavorite} isCardMode={false} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getPercentRating(offer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} {(offer.bedrooms > 1) ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} {(offer.maxAdults > 1) ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {/* ❔ key={item} - хорошо ли это? */}
                  {offer.goods.map((item) => <GoodsItem item={item} key={item} />)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  {/* ❔ По какому принципу предполагается делить текст на абзацы? */}
                  {/* <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p> */}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {shortOffers.slice(0, 3).map((shortOffer) => <PlaceCard offer={shortOffer} source={PlaceCardSource.NearPlaces} key={shortOffer.id} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default Offer;
