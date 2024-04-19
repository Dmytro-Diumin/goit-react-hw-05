import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry, but an error occurred, please refresh the page</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
