import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt}></img>;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
