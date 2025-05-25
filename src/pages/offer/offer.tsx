import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getErrorStatus, getNearbyOffers, getOffer } from 'store/slices/offer-slice/selectors';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from 'store/api-actions';
import { setOffer } from 'store/slices/offer-slice/offer-slice';
import { getPercentRating, capitalizeFirstLetter } from 'utils/util';
import { useAppDispatch, useAppSelector } from 'hooks';
import { MapSource, MAX_NEAR_PLACES_COUNT } from 'const';
import { MemoHeaderNav } from 'components/header-nav/header-nav';
import BookmarkButton from 'components/bookmark-button/bookmark-button';
import Loading from 'pages/loading/loading';
import NotFound from 'pages/not-found/not-found';
import PremiumMark from 'components/places-list/place-card/premium-mark/premium-mark';
import NearPlaces from 'components/offer/near-places/near-places';
import Map from 'components/map/map';
import Goods from 'components/offer/goods/goods';
import Gallery from 'components/offer/gallery/gallery';
import Reviews from 'components/offer/reviews/reviews';


function Offer() {
  const params = useParams();
  const id = params.id as string;

  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const hasError = useAppSelector(getErrorStatus);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, MAX_NEAR_PLACES_COUNT);

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
      <Helmet>
        <title>{offer.title}</title>
      </Helmet>

      <MemoHeaderNav />

      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={offer.images} />

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
              <Goods goods={offer.goods} />
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
              <Reviews />
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
