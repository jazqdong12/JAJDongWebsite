import Card from "react-bootstrap/Card";
import { FaBed, FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import "./PropertyCard.css";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  address: string;
  bed: number;
  bath: number;
  sqft: number;
  link?: string;
}

const PropertyCard = ({
  image,
  title,
  price,
  address,
  bed,
  bath,
  sqft,
  link,
}: PropertyCardProps) => {
  return (
    <Link to={link || "#"} className="property-card-link">
      <Card className="property-card">
        <Card.Img variant="top" src={image} className="property-image" />
        <Card.Body className="property-details">
          <Card.Title className="property-title">{title}</Card.Title>
          <Card.Text className="property-price">{price}</Card.Text>
          <Card.Text className="property-address">{address}</Card.Text>
          <div className="property-icons">
            <div className="icon-group">
              <FaBed /> {bed} Bed
            </div>
            <div className="icon-group">
              <FaBath /> {bath} Bath
            </div>
            <div className="icon-group">
              <MdOutlineSquareFoot /> {sqft.toLocaleString()} sqft
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PropertyCard;
