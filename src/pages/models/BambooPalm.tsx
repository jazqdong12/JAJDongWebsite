import ModelPage from "../../components/ModelPage";
import floorPlan from "../../assets/floorplans/bpalmfloor.jpg";
import img1 from "../../assets/properties/BambooPalm/1bamboopalm.jpg";
import img5666 from "../../assets/properties/BambooPalm/IMG_5666.jpg";
import img5667 from "../../assets/properties/BambooPalm/IMG_5667.jpg";
import img5668 from "../../assets/properties/BambooPalm/IMG_5668.jpg";
import img5669 from "../../assets/properties/BambooPalm/IMG_5669.jpg";
import img5670 from "../../assets/properties/BambooPalm/IMG_5670.jpg";
import img5672 from "../../assets/properties/BambooPalm/IMG_5672.jpg";
import img5673 from "../../assets/properties/BambooPalm/IMG_5673.jpg";
import img5674 from "../../assets/properties/BambooPalm/IMG_5674.jpg";
import img5675 from "../../assets/properties/BambooPalm/IMG_5675.jpg";
import img5676 from "../../assets/properties/BambooPalm/IMG_5676.jpg";
import img5677 from "../../assets/properties/BambooPalm/IMG_5677.jpg";
import img5678 from "../../assets/properties/BambooPalm/IMG_5678.jpg";
import img5679 from "../../assets/properties/BambooPalm/IMG_5679.jpg";
import img5680 from "../../assets/properties/BambooPalm/IMG_5680.jpg";
import img5682 from "../../assets/properties/BambooPalm/IMG_5682.jpg";
import img5683 from "../../assets/properties/BambooPalm/IMG_5683.jpg";
import img5684 from "../../assets/properties/BambooPalm/IMG_5684.jpg";

const images = [
  img1,
  img5666,
  img5667,
  img5668,
  img5669,
  img5670,
  img5672,
  img5673,
  img5674,
  img5675,
  img5676,
  img5677,
  img5678,
  img5679,
  img5680,
  img5682,
  img5683,
  img5684,
];

const BambooPalm = () => {
  const readyAddresses: { address: string; lat: number; lng: number }[] = [];

  const pendingAddresses = [
    {
      date: "March 31, 2025",
      address: "2618 54th St SW, Lehigh Acres, FL 33976",
      lat: 26.56410920187939,
      lng: -81.66695663558201,
    },
    {
      date: "March 31, 2025",
      address: "3607 30th St SW, Lehigh Acres, FL 33976",
      lat: 26.584937976947884,
      lng: -81.69312173285576,
    },
  ];

  const pendingSaleAddresses: string[] = [];

  return (
    <ModelPage
      title="Bamboo Palm"
      description="This perfect single-family home features cozy bamboo flooring,
      soaring vaulted ceilings, grand glass double doors, and a tempered
      glass shower. Enjoy a spacious covered lanai, a formal dining room,
      and a snug dinette or breakfast nook."
      bed="3 Bed"
      bath="2 Bath"
      car="2 Car"
      sqft="2,323 sqft"
      readyAddresses={readyAddresses}
      pendingAddresses={pendingAddresses}
      pendingSaleAddresses={pendingSaleAddresses}
      images={images}
      floor={floorPlan}
    />
  );
};

export default BambooPalm;
