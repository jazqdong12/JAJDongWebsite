import ModelPage from "../../components/ModelPage";
import floorPlan from "../../assets/floorplans/1350floor.jpg";
import img1350 from "../../assets/properties/1350/1350.jpg";
import img5688 from "../../assets/properties/1350/IMG_5688.jpg";
import img5689 from "../../assets/properties/1350/IMG_5689.jpg";
import img5690 from "../../assets/properties/1350/IMG_5690.jpg";
import img5691 from "../../assets/properties/1350/IMG_5691.jpg";
import img5692 from "../../assets/properties/1350/IMG_5692.jpg";
import img5694 from "../../assets/properties/1350/IMG_5694.jpg";
import img5696 from "../../assets/properties/1350/IMG_5696.jpg";
import img5701 from "../../assets/properties/1350/IMG_5701.jpg";
import img5702 from "../../assets/properties/1350/IMG_5702.jpg";
import img5704 from "../../assets/properties/1350/IMG_5704.jpg";
import img5705 from "../../assets/properties/1350/IMG_5705.jpg";
import img5706 from "../../assets/properties/1350/IMG_5706.jpg";

const images = [
  img1350,
  img5688,
  img5689,
  img5690,
  img5691,
  img5692,
  img5694,
  img5696,
  img5701,
  img5702,
  img5704,
  img5705,
  img5706,
];

const The1350 = () => {
  const readyAddresses = [
    {
      address: "3600 15th St SW, Lehigh Acres, FL 33976",
      lat: 26.5999208,
      lng: -81.6924566,
    },
    {
      address: "1124 Angelo Ave, Lehigh Acres, FL 33971",
      lat: 26.635168,
      lng: -81.7392618,
    },
  ];

  const pendingAddresses: {
    date: string;
    address: string;
    lat: number;
    lng: number;
  }[] = [];

  const pendingSaleAddresses: string[] = [];

  return (
    <ModelPage
      title="The 1350"
      description="This charming single-family home features a welcoming great room
      filled with natural light. Sleek white porcelain floors enhance its
      modern aesthetic, while the kitchen's large island doubles as a bar
      space. Additional perks include a tempered glass shower and a
      covered lanai."
      bed="3 Bed"
      bath="2 Bath"
      car="2 Car"
      sqft="1,870 sqft"
      readyAddresses={readyAddresses}
      pendingAddresses={pendingAddresses}
      pendingSaleAddresses={pendingSaleAddresses}
      images={images}
      floor={floorPlan}
    />
  );
};

export default The1350;
