import { Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

interface StoreItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const StoreItem = ({ id, title, price, image }: StoreItemProps) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
