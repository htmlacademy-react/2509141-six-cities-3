type ImageProps = {
  image: string;
}

function Image({ image }: ImageProps) {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio"/>
    </div>
  );
}


export default Image;
