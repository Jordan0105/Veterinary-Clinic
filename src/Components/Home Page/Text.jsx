import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Text = ({ children }) => {
  useEffect(() => {}, []);

  return (
    <div className="animationContainer container-sm  d-flex flex-column justify-content-start text-start">
      {children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Text;
