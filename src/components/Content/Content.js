import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { StyledContainer, StyledContent } from "./StyledContent";
import { UsersList } from "../";

const Content = ({ users, getMoreUsers }) => {
  const { data, isLoading, isPaginationLoading, error } = users;

  return (
    <StyledContainer>
      <StyledContent>
        <Switch>
          <Route
            exact
            path="/list1"
            component={() => (
              <UsersList
                data={data}
                isLoading={isLoading}
                list={"first"}
                error={error}
              />
            )}
          />
          <Route
            exact
            path="/list2"
            component={() => (
              <UsersList
                data={data}
                isLoading={isLoading}
                isPaginationLoading={isPaginationLoading}
                getMoreUsers={getMoreUsers}
                list={"second"}
                error={error}
              />
            )}
          />
          <Redirect exact from="*" to={"/list1"} />
        </Switch>
      </StyledContent>
    </StyledContainer>
  );
};

Content.propTypes = {
  users: PropTypes.object,
  getMoreUsers: PropTypes.func,
  path: PropTypes.string,
};

Content.defaultProps = {
  users: {},
  path: "/list1",
};

export default Content;
