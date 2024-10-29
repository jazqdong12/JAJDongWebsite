import PropertyCard from "../components/PropertyCard";
import sablePalm from "../assets/properties/sablepalm.jpg";
import bambooPalm from "../assets/properties/bamboopalm.jpg";
import the1350 from "../assets/properties/1350.jpg";
import PropertyGroup from "../components/PropertyGroup";

const modelsArray = [
  <PropertyCard
    image={bambooPalm}
    title="Bamboo Palm"
    price="$359,000"
    address="3819 20th St SW, Lehigh Acres, FL 33972"
    bed={3}
    bath={2}
    sqft={2323}
  ></PropertyCard>,
  <PropertyCard
    image={sablePalm}
    title="Sable Palm"
    price="$410,000"
    address="1018 Thompson Ave, Lehigh Acres, FL 33972"
    bed={4}
    bath={2}
    sqft={2930}
  ></PropertyCard>,
  <PropertyCard
    image={the1350}
    title="The 1350"
    price="$325,000"
    address="1124 Angelo Ave, Lehigh Acres, FL 33971"
    bed={3}
    bath={2}
    sqft={1870}
  ></PropertyCard>,
];

const Models = () => {
  return (
    <section className="models-section">
      <PropertyGroup cardArray={modelsArray} rowLength={3}></PropertyGroup>
    </section>
  );
};

export default Models;
