type OfferImageProps = {
  image: string;
}

function OfferImage({image}: OfferImageProps) {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio"/>
    </div>
  );
}


export default OfferImage;
