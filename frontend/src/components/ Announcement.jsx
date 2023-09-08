import React from "react";
import { Alert } from "react-bootstrap";

const Announcement = () => {
  return (
    <Alert variant="dark" className="announcement-banner">
      <p className="announcement-text">Free Shipping on Orders Over $50</p>
    </Alert>
  );
};

export default Announcement;
