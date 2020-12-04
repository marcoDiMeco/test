import styled from "styled-components";

const StyledUsersList = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledUserContainer = styled.div`
  width: 100%;
  max-width: 200px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  background: white;
`;

const StyledAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #f4f4f4;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 10px;
`;

const StyledName = styled.div`
  font-size: 15px;
  width: 100%;
`;

const StyledSurname = styled.div`
  font-size: 15px;
  font-weight: 700;
  width: 100%;
`;

const StyledLoadingContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`;

const StyledError = styled.div`
  width: 100%;
  padding-top: 100px;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: #e70505;;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export {
  StyledUserContainer,
  StyledAvatar,
  StyledName,
  StyledUsersList,
  StyledSurname,
  StyledLoadingContainer,
  StyledError,
};
