import Button from "react-bootstrap/Button";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  link?: string;
}

const MyButton = ({ label, onClick, link }: ButtonProps) => {
  return (
    <>
      <div className="mb-2">
        <Button onClick={onClick} href={link}>
          {label}{" "}
        </Button>
      </div>
    </>
  );
};
export default MyButton;
