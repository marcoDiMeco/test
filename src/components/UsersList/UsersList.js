import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Loading } from "../";
import { AMOUNT_VALUE } from "../../constants";
import {
  StyledUsersList,
  StyledUserContainer,
  StyledAvatar,
  StyledName,
  StyledSurname,
  StyledLoadingContainer,
  StyledError,
} from "./StyledUsersList";

const UsersList = ({
  data,
  isLoading,
  getMoreUsers,
  list,
  isPaginationLoading,
  error,
}) => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    if (list === "second") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [list]);

  useEffect(() => {
    if (isBottom && data.length < parseInt(AMOUNT_VALUE.first)) {
      getMoreUsers(AMOUNT_VALUE.second);
    }
  }, [isBottom, getMoreUsers, data]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight >= scrollHeight) {
      setIsBottom(true);
    }
  };

  return (
    <StyledUsersList>
      {error && (
        <StyledError>
          An error occurred.
          <br />
          Please refresh page.
        </StyledError>
      )}
      {isLoading ? (
        <Loading isBottom={false} />
      ) : (
        data.map((item, index) => {
          return (
            <StyledUserContainer key={index}>
              <StyledAvatar
                style={{ backgroundImage: `url(${item.picture.large})` }}
              />
              <StyledName>{item.name.first}</StyledName>
              <StyledSurname>{item.name.last}</StyledSurname>
            </StyledUserContainer>
          );
        })
      )}
      {isPaginationLoading && (
        <StyledLoadingContainer>
          <Loading isBottom={true} />
        </StyledLoadingContainer>
      )}
    </StyledUsersList>
  );
};

UsersList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  getMoreUsers: PropTypes.func,
  list: PropTypes.string,
  isPaginationLoading: PropTypes.bool,
  error: PropTypes.bool,
};

UsersList.defaultProps = {
  data: [],
  isLoading: false,
  list: "first",
  isPaginationLoading: false,
  error: false,
};

export default UsersList;
