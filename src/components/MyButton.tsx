import Button from "react-bootstrap/Button";
import "./MyButton.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  link?: string;
  type?: "button" | "submit" | "reset";
}

const MyButton = ({ label, onClick, link, type }: ButtonProps) => {
  return (
    <>
      <div className="custom-button">
        <Button onClick={onClick} href={link} type={type}>
          {label}{" "}
        </Button>
      </div>
    </>
  );
};
export default MyButton;
