import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const GoBackButton = () => {
  const location = useLocation();
  const previousPath = useRef(location?.state ?? "/movies");

  return <Link to={previousPath.current}>Go Back</Link>;
};

export default GoBackButton;
