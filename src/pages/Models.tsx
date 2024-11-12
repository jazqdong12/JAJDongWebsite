import PropertyCard from "../components/PropertyCard";
import sablePalmPlus from "../assets/properties/SablePalmPlus/sablepalmplus.jpg";
import sablePalm from "../assets/properties/SablePalm/sablepalm.jpg";
import bambooPalm from "../assets/properties/BambooPalm/bamboopalm.jpg";
import the1350 from "../assets/properties/1350/1350.jpg";
import theDuplex from "../assets/properties/Duplex/duplex.jpg";
import PropertyGroup from "../components/PropertyGroup";
import "../main.css";
import "./models.css";

const modelsArray = [
  <PropertyCard
    image={sablePalm}
    title="Sable Palm"
    price="$410,000"
    address="Call For More Details"
    bed={4}
    bath={2}
    sqft={2930}
  ></PropertyCard>,
  <PropertyCard
    image={sablePalmPlus}
    title="Sable Palm Plus"
    price="$410,000"
    address="Call For More Details"
    bed={4}
    bath={2}
    sqft={2930}
  ></PropertyCard>,
  <PropertyCard
    image={bambooPalm}
    title="Bamboo Palm"
    price="$359,000"
    address="Call For More Details"
    bed={3}
    bath={2}
    sqft={2323}
  ></PropertyCard>,
  <PropertyCard
    image={the1350}
    title="The 1350"
    price="$325,000"
    address="Call For More Details"
    bed={3}
    bath={2}
    sqft={1870}
  ></PropertyCard>,
  <PropertyCard
    image={theDuplex}
    title="The Duplex"
    price="$325,000"
    address="Call For More Details"
    bed={3}
    bath={2}
    sqft={1870}
  ></PropertyCard>,
];

const Models = () => {
  return (
    <>
      <div className="heading-section">
        <h1>Our Models</h1>
        <h3>Floor Plans & Move-In Ready Locations</h3>
      </div>
      <section className="models-section">
        <PropertyGroup
          cardArray={modelsArray}
          rowLength={3}
          minLength={1}
        ></PropertyGroup>
      </section>
    </>
  );
};

export default Models;
