import Carousel from "react-bootstrap/Carousel";

interface SlideshowProps {
  images: string[];
  clamp: string;
  opacity?: number;
}

function Slideshow({ images, clamp, opacity }: SlideshowProps) {
  return (
    <Carousel fade indicators={false} style={{ opacity: opacity }}>
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img
            src={src}
            className="d-block w-100"
            style={{ height: `clamp(${clamp})`, objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slideshow;
