import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSlider from "../components/HeroSlider";
import MyButton from "../components/MyButton";
import featureBanner1 from "../assets/feature-banner-1.jpg";
import featureBanner2 from "../assets/feature-banner-2.jpg";
import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";
import gallery4 from "../assets/gallery/gallery4.png";
import gallery5 from "../assets/gallery/gallery5.png";
import gallery6 from "../assets/gallery/gallery6.png";
import { FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    adaptiveHeight: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home-container">
      <section className="hero-container">
        <HeroSlider></HeroSlider>
        <div className="hero-text">
          <h1>Find Your Dream Home in Lehigh Acres</h1>
        </div>
        <div className="button-group">
          <MyButton link={"/#/models"} label="Explore Models"></MyButton>
          <MyButton link={"/#/contact"} label="Inquire Now"></MyButton>
        </div>
        <div className="info-text-container">
          <p>Owner financing available</p>
          <p>$0 closing cost</p>
          <p>7.5% interest rate</p>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">Gallery</h2>

        <div className="slider-container">
          <Slider {...settings}>
            <img src={gallery1} />
            <img src={gallery2} />
            <img src={gallery3} />
            <img src={gallery4} />
            <img src={gallery5} />
            <img src={gallery6} />
          </Slider>
        </div>
        <p className="gallery-text">
          {" "}
          We have something special for everyone—luxury homes, cozy retreats,
          and multi-family living spaces. Whether you're searching for your
          dream home or a smart investment, we're here to guide you every step
          of the way.{" "}
        </p>
      </section>

      <section className="feature-container">
        <div className="feature first-feature">
          <figure
            className="feature-banner"
            style={{ backgroundImage: `url(${featureBanner1})` }}
          ></figure>
          <div className="feature-content">
            <h2>Beautiful Interior Design</h2>
            <p>
              Experience an open living space with a seamless flow between every
              area. All lighting features high-efficiency LED fixtures to
              brighten your home. Our kitchens are designed with durable granite
              countertops, custom cabinetry, and premium stainless steel
              appliances for a perfect balance of style and functionality. The
              elegance of granite countertops extends into the bathrooms.
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <FaCheckCircle />
                Open Space Layout
              </li>
              <li className="feature-item">
                <FaCheckCircle />
                Integrated LED Lighting
              </li>
              <li className="feature-item">
                <FaCheckCircle />
                Granite Countertops
              </li>
              <li className="feature-item">
                <FaCheckCircle />
                Stainless Steel Appliances
              </li>
            </ul>
          </div>
        </div>
        <div className="feature second-feature">
          <div className="feature-content">
            <h2>Premium Exterior Renovations</h2>
            <p>
              Our newly constructed homes are made with high-quality materials
              for top durability. Impact doors and windows safeguard against
              extreme weather, enhance energy efficiency, and minimize noise.
              Vaulted ceilings add a sense of grandeur to every room. With solid
              block construction and masonry, these homes offer excellent
              insulation, easy maintenance, and a foundation built to stand the
              test of time.
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <FaCheckCircle />
                Impact Doors & Windows
              </li>
              <li className="feature-item">
                <FaCheckCircle />
                Vaulted Ceilings
              </li>
              <li className="feature-item">
                <FaCheckCircle />
                Block Construction
              </li>
              <li className="feature-item">
                <FaCheckCircle />
                Solid Masonry
              </li>
            </ul>
          </div>
          <figure
            className="feature-banner-2"
            style={{ backgroundImage: `url(${featureBanner2})` }}
          ></figure>
        </div>
      </section>
    </div>
  );
};

export default Home;
