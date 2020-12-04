import React from "react";
import PropTypes from "prop-types";
import { StyledLoading } from "./StyledLoading";

const Loading = ({ isBottom }) => {
  return (
    <StyledLoading isBottom={isBottom}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoading>
  );
};

Loading.propTypes = {
  isBottom: PropTypes.bool,
};

Loading.defaultProps = {
  isBottom: false,
};

export default Loading;
