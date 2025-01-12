import ModelPage from "../../components/ModelPage";
import floorPlan from "../../assets/floorplans/duplexfloor.jpg";
import imgDuplex from "../../assets/properties/Duplex/1duplex.jpg";
import img5715 from "../../assets/properties/Duplex/IMG_5715.jpg";
import img5716 from "../../assets/properties/Duplex/IMG_5716.jpg";
import img5717 from "../../assets/properties/Duplex/IMG_5717.jpg";
import img5718 from "../../assets/properties/Duplex/IMG_5718.jpg";
import img5719 from "../../assets/properties/Duplex/IMG_5719.jpg";
import img5720 from "../../assets/properties/Duplex/IMG_5720.jpg";
import img5721 from "../../assets/properties/Duplex/IMG_5721.jpg";
import img5722 from "../../assets/properties/Duplex/IMG_5722.jpg";
import img5723 from "../../assets/properties/Duplex/IMG_5723.jpg";
import img5724 from "../../assets/properties/Duplex/IMG_5724.jpg";
import img5725 from "../../assets/properties/Duplex/IMG_5725.jpg";
import img5726 from "../../assets/properties/Duplex/IMG_5726.jpg";
import img5727 from "../../assets/properties/Duplex/IMG_5727.jpg";
import img5728 from "../../assets/properties/Duplex/IMG_5728.jpg";

const images = [
  imgDuplex,
  img5715,
  img5716,
  img5717,
  img5718,
  img5719,
  img5720,
  img5721,
  img5722,
  img5723,
  img5724,
  img5725,
  img5726,
  img5727,
  img5728,
];

const TheDuplex = () => {
  const readyAddresses: { address: string; lat: number; lng: number }[] = [];

  const pendingAddresses = [
    {
      date: "February 28, 2025",
      address: "1508 Haviland Ave S, Lehigh Acres, FL 33976",
      lat: 26.597839,
      lng: -81.718354,
    },
    {
      date: "February 28, 2025",
      address: "2810 Martin Ave S, Lehigh Acres, FL 33976",
      lat: 26.593514,
      lng: -81.73353,
    },
    {
      date: "February 28, 2025",
      address: "4516 26th St SW, Lehigh Acres, FL 33976",
      lat: 26.590159,
      lng: -81.719247,
    },
    {
      date: "February 28, 2025",
      address: "4601 14th St SW, Lehigh Acres, FL 33976",
      lat: 26.59904,
      lng: -81.719033,
    },
    {
      date: "February 28, 2025",
      address: "4649 29th St SW, Lehigh Acres, FL 33976",
      lat: 26.590412,
      lng: -81.727739,
    },
  ];

  const pendingSaleAddresses: string[] = [];

  return (
    <ModelPage
      title="The Duplex"
      description="This multi-family property offers two well-designed housing units,
      each featuring 2 beds, 2 baths, and a versatile study room that can
      easily be converted into a third bedroom. In addition to the
      generously sized living and dining areas, each unit also has a
      designated breakfast nook and a covered lanai."
      bed="4 Bed"
      bath="4 Bath"
      car="4 Car"
      sqft=" 3,504 sqft"
      readyAddresses={readyAddresses}
      pendingAddresses={pendingAddresses}
      pendingSaleAddresses={pendingSaleAddresses}
      images={images}
      floor={floorPlan}
    />
  );
};

export default TheDuplex;
