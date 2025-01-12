import Slideshow from "./Slideshow";
import sablePalm from "../assets/properties/SablePalm/1sablepalm.jpg";
import property1 from "../assets/properties/property-1.jpg";
import property3 from "../assets/properties/property-3.jpg";
import bambooPalm from "../assets/properties/BambooPalm/1bamboopalm.jpg";
import img1350 from "../assets/properties/1350/1350.jpg";
import duplex from "../assets/properties/Duplex/1duplex.jpg";

const images = [sablePalm, property1, property3, bambooPalm, img1350, duplex];

const clamp = "65vh, 65vw, 80vh";

const HeroSlider = () => {
  return <Slideshow images={images} clamp={clamp} opacity={0.9}></Slideshow>;
};

export default HeroSlider;
