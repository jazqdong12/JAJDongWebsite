import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface PropertyGroupProps {
  cardArray: JSX.Element[];
  rowLength: number;
  minLength: number;
}

const PropertyGroup = ({
  cardArray,
  rowLength,
  minLength,
}: PropertyGroupProps) => {
  return (
    <Row xs={minLength} md={rowLength} className="g-4">
      {cardArray.map((card, idx) => (
        <Col key={idx}> {card} </Col>
      ))}
    </Row>
  );
};

export default PropertyGroup;
