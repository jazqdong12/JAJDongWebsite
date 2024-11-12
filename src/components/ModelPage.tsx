import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Slideshow from "./Slideshow";
import "./ModelPage.css";

interface ModelPageProps {
  //   title: string;
  //   description: string;
  //   bed: string;
  //   bath: string;
  //   car: string;
  //   sqft: string;
  //   readyAddresses: string[];
  //   pendingAddresses: string[];
  images: string[];
  floor?: string;
}

const apiKey = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const ModelPage = ({ images, floor }: ModelPageProps) => {
  return (
    <>
      <div className="slides-container">
        <Slideshow images={images} clamp={"50vh, 65vw, 70vh"}></Slideshow>
      </div>
      <div className="map-container">
        <APIProvider apiKey={apiKey || ""}>
          <Map
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
        </APIProvider>
      </div>
      ;
    </>
  );
};

export default ModelPage;
