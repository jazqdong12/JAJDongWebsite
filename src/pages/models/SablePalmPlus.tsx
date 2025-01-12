import ModelPage from "../../components/ModelPage";
import floorPlan from "../../assets/floorplans/spalmplusfloor.jpg";
import imgSablePalmPlus from "../../assets/properties/SablePalmPlus/1sablepalmplus.jpg";
import img0600 from "../../assets/properties/SablePalmPlus/IMG_0600.jpg";
import img0601 from "../../assets/properties/SablePalmPlus/IMG_0601.jpg";
import img0603 from "../../assets/properties/SablePalmPlus/IMG_0603.jpg";
import img0604 from "../../assets/properties/SablePalmPlus/IMG_0604.jpg";
import img0605 from "../../assets/properties/SablePalmPlus/IMG_0605.jpg";
import img0606 from "../../assets/properties/SablePalmPlus/IMG_0606.jpg";
import img0607 from "../../assets/properties/SablePalmPlus/IMG_0607.jpg";
import img0608 from "../../assets/properties/SablePalmPlus/IMG_0608.jpg";
import img0609 from "../../assets/properties/SablePalmPlus/IMG_0609.jpg";
import img0610 from "../../assets/properties/SablePalmPlus/IMG_0610.jpg";
import img0611 from "../../assets/properties/SablePalmPlus/IMG_0611.jpg";
import img0612 from "../../assets/properties/SablePalmPlus/IMG_0612.jpg";
import img0613 from "../../assets/properties/SablePalmPlus/IMG_0613.jpg";
import img0614 from "../../assets/properties/SablePalmPlus/IMG_0614.jpg";
import img0615 from "../../assets/properties/SablePalmPlus/IMG_0615.jpg";

const images = [
  imgSablePalmPlus,
  img0600,
  img0601,
  img0603,
  img0604,
  img0605,
  img0606,
  img0607,
  img0608,
  img0609,
  img0610,
  img0611,
  img0612,
  img0613,
  img0614,
  img0615,
];

const SablePalmPlus = () => {
  const readyAddresses = [
    {
      address: "819 Eighth Ave, Lehigh Acres, FL 33972",
      lat: 26.631503,
      lng: -81.619872,
    },
  ];

  const pendingAddresses = [
    {
      date: "February 10, 2025",
      address: "704 Palmetto Ave, Lehigh Acres, FL 33972",
      lat: 26.6260603,
      lng: -81.6431135,
    },
    {
      date: "February 10, 2025",
      address: "714 Palmetto Ave, Lehigh Acres, FL 33972",
      lat: 26.626922,
      lng: -81.6431549,
    },
    {
      date: "March 15, 2025",
      address: "814 Congress Ave, Lehigh Acres, FL 33972",
      lat: 26.630423,
      lng: -81.651826,
    },
  ];

  const pendingSaleAddresses: string[] = [
    "4608 Flora Ave S, Lehigh Acres, FL 33976",
  ];

  return (
    <ModelPage
      title="Sable Palm Plus"
      description="Our largest single-family home has all the features and the same elegance as the classic Sable Palm, 
      but with an additional bathroom and a 3-car garage. This stunning and spacious residence is the envy of the neighborhood."
      bed="4 Bed"
      bath="3 Bath"
      car="3 Car"
      sqft="3,294 sqft"
      readyAddresses={readyAddresses}
      pendingAddresses={pendingAddresses}
      pendingSaleAddresses={pendingSaleAddresses}
      images={images}
      floor={floorPlan}
    />
  );
};

export default SablePalmPlus;
