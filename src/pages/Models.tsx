import PropertyCard from "../components/PropertyCard";
import sablePalmPlus from "../assets/properties/SablePalmPlus/1sablepalmplus.jpg";
import sablePalm from "../assets/properties/SablePalm/1sablepalm.jpg";
import bambooPalm from "../assets/properties/BambooPalm/1bamboopalm.jpg";
import the1350 from "../assets/properties/1350/1350.jpg";
import theDuplex from "../assets/properties/Duplex/1duplex.jpg";
import PropertyGroup from "../components/PropertyGroup";
import "../main.css";
import "./models.css";

const modelsArray = [
  <PropertyCard
    image={sablePalm}
    title="Sable Palm"
    price="$395,000 - $409,000"
    address="Call For More Details"
    bed={4}
    bath={2}
    sqft={2930}
    link="/models/sable-palm"
  ></PropertyCard>,
  <PropertyCard
    image={sablePalmPlus}
    title="Sable Palm Plus"
    price="$439,000 - $449,000"
    address="Call For More Details"
    bed={4}
    bath={3}
    sqft={3294}
    link="/models/sable-palm-plus"
  ></PropertyCard>,
  <PropertyCard
    image={bambooPalm}
    title="Bamboo Palm"
    price="$359,000"
    address="Call For More Details"
    bed={3}
    bath={2}
    sqft={2323}
    link="/models/bamboo-palm"
  ></PropertyCard>,
  <PropertyCard
    image={the1350}
    title="The 1350"
    price="$319,000 - 325,000"
    address="Call For More Details"
    bed={3}
    bath={2}
    sqft={1870}
    link="/models/the-1350"
  ></PropertyCard>,
  <PropertyCard
    image={theDuplex}
    title="The Duplex"
    price="$549,000"
    address="Call For More Details"
    bed={4}
    bath={4}
    sqft={3504}
    link="/models/the-duplex"
  ></PropertyCard>,
];

const Models = () => {
  return (
    <div className="models">
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
    </div>
  );
};

export default Models;
