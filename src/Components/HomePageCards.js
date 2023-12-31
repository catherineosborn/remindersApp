import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function HomePageCard({ to, title, text, buttonText }) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={to}>
          <Button variant="primary">{buttonText}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}