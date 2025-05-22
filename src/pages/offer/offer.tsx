import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getErrorStatus, getNearbyOffers, getOffer } from 'store/slices/offer-slice/selectors';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from 'store/api-actions';
import { setOffer } from 'store/slices/offer-slice/offer-slice';
import { getPercentRating, capitalizeFirstLetter } from 'utils/util';
import { useAppDispatch, useAppSelector } from 'hooks';
import { MapSource } from 'const';
import BookmarkButton from 'components/bookmark-button/bookmark-button';
import Loading from 'pages/loading/loading';
import PremiumMark from 'components/premium-mark/premium-mark';
import OfferImage from 'components/offer-image/offer-image';
import ReviewList from 'components/review-list/review-list';
import NearPlaces from 'components/near-places/near-places';
import GoodsItem from 'components/goods-item/goods-item';
import HeaderNav from 'components/header-nav/header-nav';
import NotFound from 'pages/not-found/not-found';
import Map from 'components/map/map';


function Offer() {
  const params = useParams();
  const id = params.id as string;

  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const hasError = useAppSelector(getErrorStatus);
  const nearbyOffers = useAppSelector(getNearbyOffers);


  const isLoading = (offer === undefined);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchNearbyOffersAction(id));
    dispatch(fetchReviewsAction(id));

    return () => {
      dispatch(setOffer(undefined));
    };
  }, [dispatch, id]);


  if (hasError) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

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
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
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
                <BookmarkButton offerId={offer.id} isFavorite={offer.isFavorite} isCardMode={false} />
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
                  {capitalizeFirstLetter(offer.type)}
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
                  {offer.goods.map((item) => <GoodsItem item={item} key={item} />)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewList />
            </div>
          </div>
          <Map source={MapSource.Offer} location={offer.location} offers={nearbyOffers} selectedOffer={offer} />
        </section>
        <NearPlaces offers={nearbyOffers} />
      </main>
    </div>
  );
}


export default Offer;
