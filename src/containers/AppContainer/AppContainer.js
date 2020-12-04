import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  requestUsers,
  requestMoreUsers,
} from "../../redux/users/users.actions";
import { Header, Footer, Content } from "../../components";
import { AMOUNT_VALUE } from "../../constants";
import { StyledContainer } from "./StyledAppContainer";

const AppContainer = () => {
  const isInitialMount = useRef(true);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const currentPath = useLocation();

  const getUsers = (amount) => {
    dispatch(requestUsers(amount));
  };

  const getMoreUsers = (amount) => {
    dispatch(requestMoreUsers(amount));
  };

  useEffect(() => {
    if (isInitialMount.current) {
      const amount =
        currentPath.pathname === "/list2"
          ? AMOUNT_VALUE.second
          : AMOUNT_VALUE.first;
      dispatch(requestUsers(amount));
      isInitialMount.current = false;
    }
  }, [dispatch, currentPath]);

  return (
    <StyledContainer>
      <Header getUsers={getUsers} />
      <Content users={users} getMoreUsers={getMoreUsers} />
      <Footer />
    </StyledContainer>
  );
};

export default AppContainer;
