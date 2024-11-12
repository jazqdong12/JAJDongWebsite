import "./Home.css";
import HeroSlider from "../components/HeroSlider";
import MyButton from "../components/MyButton";
import PropertyCard from "../components/PropertyCard";
import sablePalm from "../assets/properties/SablePalm/sablepalm.jpg";
import bambooPalm from "../assets/properties/BambooPalm/bamboopalm.jpg";
import the1350 from "../assets/properties/1350/1350.jpg";
import PropertyGroup from "../components/PropertyGroup";

const featuredArray = [
  <PropertyCard
    image={bambooPalm}
    title="Bamboo Palm"
    price="$359,000"
    address="3819 20th St SW, Lehigh Acres, FL 33972"
    bed={3}
    bath={2}
    sqft={2323}
    link="/models/bamboo-palm"
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

const Home = () => {
  return (
    <>
      <section className="hero-container">
        <HeroSlider></HeroSlider>
        <div className="hero-text">
          <h1>Find Your Dream Home in Lehigh Acres</h1>
        </div>
        <div className="button-group">
          <MyButton link={"/#/models"} label="Explore Models"></MyButton>
          <MyButton link={"/#/contactus"} label="Inquire Now"></MyButton>
        </div>
      </section>
      <section className="property-section">
        <PropertyGroup
          cardArray={featuredArray}
          rowLength={3}
          minLength={2}
        ></PropertyGroup>
      </section>
    </>
  );
};
export default Home;
