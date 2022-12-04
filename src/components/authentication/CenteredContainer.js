import React, { Children } from "react";
import { Container } from "react-bootstrap";

export default function CenteredContainer({ children }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {Children.map(children, child => child)}
      </div>
    </Container>
  );
}
