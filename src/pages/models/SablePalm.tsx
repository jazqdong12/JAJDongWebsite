import ModelPage from "../../components/ModelPage";
import floorPlan from "../../assets/floorplans/spalmfloor.jpg";
import imgSablePalm from "../../assets/properties/SablePalm/1sablepalm.jpg";
import img5618 from "../../assets/properties/SablePalm/IMG_5618.jpg";
import img5619 from "../../assets/properties/SablePalm/IMG_5619.jpg";
import img5620 from "../../assets/properties/SablePalm/IMG_5620.jpg";
import img5621 from "../../assets/properties/SablePalm/IMG_5621.jpg";
import img5626 from "../../assets/properties/SablePalm/IMG_5626.jpg";
import img5627 from "../../assets/properties/SablePalm/IMG_5627.jpg";
import img5629 from "../../assets/properties/SablePalm/IMG_5629.jpg";
import img5632 from "../../assets/properties/SablePalm/IMG_5632.jpg";
import img5633 from "../../assets/properties/SablePalm/IMG_5633.jpg";
import img5636 from "../../assets/properties/SablePalm/IMG_5636.jpg";
import img5637 from "../../assets/properties/SablePalm/IMG_5637.jpg";
import img5638 from "../../assets/properties/SablePalm/IMG_5638.jpg";
import img5642 from "../../assets/properties/SablePalm/IMG_5642.jpg";
import img5643 from "../../assets/properties/SablePalm/IMG_5643.jpg";
import img5645 from "../../assets/properties/SablePalm/IMG_5645.jpg";
import img5648 from "../../assets/properties/SablePalm/IMG_5648.jpg";
import img5649 from "../../assets/properties/SablePalm/IMG_5649.jpg";
import img5650 from "../../assets/properties/SablePalm/IMG_5650.jpg";

const images = [
  imgSablePalm,
  img5618,
  img5619,
  img5620,
  img5621,
  img5626,
  img5627,
  img5629,
  img5632,
  img5633,
  img5636,
  img5637,
  img5638,
  img5642,
  img5643,
  img5645,
  img5648,
  img5649,
  img5650,
];

const SablePalm = () => {
  const readyAddresses = [
    {
      address: "2510 33rd St SW, Lehigh Acres, FL 33971",
      lat: 26.583344,
      lng: -81.663789,
    },
    {
      address: "3708 25th St SW, Lehigh Acres, FL 33976",
      lat: 26.589812,
      lng: -81.695496,
    },
  ];

  const pendingAddresses = [
    {
      date: "January 31, 2025",
      address: "1006 Congress Ave, Lehigh Acres, FL 33972",
      lat: 26.636441,
      lng: -81.651865,
    },
    {
      date: "January 31, 2025",
      address: "1105 Dixie Ave, Lehigh Acres, FL 33972",
      lat: 26.639691,
      lng: -81.65840399999999,
    },
    {
      date: "January 31, 2025",
      address: "1114 Henry Ave, Lehigh Acres, FL 33972",
      lat: 26.64129,
      lng: -81.639016,
    },
    {
      date: "January 31, 2025",
      address: "3204 7th St W, Lehigh Acres, FL 33971",
      lat: 26.6200432,
      lng: -81.6813396,
    },
    {
      date: "January 31, 2025",
      address: "3206 7th St W, Lehigh Acres, FL 33971",
      lat: 26.620046,
      lng: -81.681578,
    },
    {
      date: "January 31, 2025",
      address: "3409 26th St SW, Lehigh Acres, FL 33976",
      lat: 26.5886566,
      lng: -81.688459,
    },
    {
      date: "January 31, 2025",
      address: "3508 17th St SW, Lehigh Acres, FL 33976",
      lat: 26.597191,
      lng: -81.690316,
    },
    {
      date: "January 31, 2025",
      address: "704 Henry Ave, Lehigh Acres, FL 33972",
      lat: 26.625531,
      lng: -81.638775,
    },
    {
      date: "January 31, 2025",
      address: "910 Acacia Ave, Lehigh Acres, FL 33972 - 1 Acre Lot",
      lat: 26.6334512,
      lng: -81.6489581,
    },
    {
      date: "February 28, 2025",
      address: "1007 Prospect Ave, Lehigh Acres, FL 33972",
      lat: 26.636598,
      lng: -81.63835399999999,
    },
    {
      date: "February 28, 2025",
      address: "1119 State Ave, Lehigh Acres, FL 33972",
      lat: 26.641731,
      lng: -81.65409799999999,
    },
    {
      date: "February 28, 2025",
      address: "1120 Carl Ave, Lehigh Acres, FL 33972",
      lat: 26.634619,
      lng: -81.73089399999999,
    },
    {
      date: "February 28, 2025",
      address: "118 Parish Ave, Lehigh Acres, FL 33972",
      lat: 26.57726,
      lng: -81.657611,
    },
    {
      date: "February 28, 2025",
      address: "2709 Villa Ave S, Lehigh Acres, FL 33976",
      lat: 26.587066,
      lng: -81.694411,
    },
    {
      date: "February 28, 2025",
      address: "2808 25th St SW, Lehigh Acres, FL 33976",
      lat: 26.590861,
      lng: -81.67136599999999,
    },
    {
      date: "February 28, 2025",
      address: "2839 Nancy Dr, Lehigh Acres, FL 33971",
      lat: 26.640083,
      lng: -81.683313,
    },
    {
      date: "February 28, 2025",
      address: "3714 39th St SW, Lehigh Acres, FL 33976",
      lat: 26.577789,
      lng: -81.695883,
    },
    {
      date: "February 28, 2025",
      address: "4006 22nd St SW, Lehigh Acres, FL 33976",
      lat: 26.5925513,
      lng: -81.7032444,
    },
    {
      date: "February 28, 2025",
      address: "5568 Beek St, Lehigh Acres, FL 33971",
      lat: 26.6306762,
      lng: -81.69663059999999,
    },
    {
      date: "March 31, 2025",
      address: "1112 Lake Ave, Lehigh Acres, FL 33972",
      lat: 26.641416,
      lng: -81.617998,
    },
    {
      date: "March 31, 2025",
      address: "2600 Vera Ave S, Lehigh Acres, FL 33976",
      lat: 26.58867,
      lng: -81.6937839,
    },
    {
      date: "March 31, 2025",
      address: "2815 24th St SW, Lehigh Acres, FL 33976",
      lat: 26.5911995,
      lng: -81.6721254,
    },
    {
      date: "March 31, 2025",
      address: "3604 12th St SW, Lehigh Acres, FL 33976",
      lat: 26.602583,
      lng: -81.69295799999999,
    },
    {
      date: "March 31, 2025",
      address: "3609 16th St SW, Lehigh Acres, FL 33976",
      lat: 26.597426,
      lng: -81.6931759,
    },
  ];

  const pendingSaleAddresses: string[] = [
    "2711 36th St SW, Lehigh Acres, FL 33976",
  ];

  return (
    <ModelPage
      title="Sable Palm"
      description="Our most popular model is a modern classic. This elegant residence
      boasts porcelain tile flooring, soaring vaulted ceilings, and grand
      glass double doors. Additional refined spaces include a formal
      dining room, a formal living room, a cozy dinette or breakfast nook,
      and a generous covered lanai."
      bed="4 Bed"
      bath="2 Bath"
      car="2 Car"
      sqft="2,930 sqft"
      readyAddresses={readyAddresses}
      pendingAddresses={pendingAddresses}
      pendingSaleAddresses={pendingSaleAddresses}
      images={images}
      floor={floorPlan}
    />
  );
};

export default SablePalm;
