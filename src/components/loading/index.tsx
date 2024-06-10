import React from "react";
import "./style.scss";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="preloader">
      <div className="status">
        <Spinner animation="border" variant="success" />
      </div>
    </div>
  );
}
