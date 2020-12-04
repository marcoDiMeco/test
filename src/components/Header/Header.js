import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { AMOUNT_VALUE } from "../../constants";
import { StyledHeaderContainer, StyledHeaderContent } from "./StyledHeader";

const Header = ({ getUsers }) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderContent>
        <NavLink
          exact
          to="/list1"
          activeClassName="selected"
          onClick={() => getUsers(AMOUNT_VALUE.first)}
        >
          List 1
        </NavLink>
        <NavLink
          exact
          to="/list2"
          activeClassName="selected"
          onClick={() => getUsers(AMOUNT_VALUE.second)}
        >
          List 2
        </NavLink>
      </StyledHeaderContent>
    </StyledHeaderContainer>
  );
};

Header.propTypes = {
  getUsers: PropTypes.func,
};

export default Header;
