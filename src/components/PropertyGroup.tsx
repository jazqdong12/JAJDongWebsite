import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropertyCard from "./PropertyCard";

interface PropertyGroupProps {
  cardArray: (typeof PropertyCard)[];
  rowLength: number;
}

const PropertyGroup = ({ cardArray, rowLength }: PropertyGroupProps) => {
  return (
    <Row xs={2} md={rowLength} className="g-4">
      {cardArray.map((card: PropertyCard, idx: number) => (
        <Col key={idx}> {card} </Col>
      ))}
    </Row>
  );
};

export default PropertyGroup;
