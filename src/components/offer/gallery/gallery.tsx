import Image from './image/image';


type GalleryProps = {
  images: string[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, 6).map((image) => <Image image={image} key={image} />)}
      </div>
    </div>
  );
}


export default Gallery;

