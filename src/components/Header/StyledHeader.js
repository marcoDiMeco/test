import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
  background-color: white;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 5px #cbcbcb;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  a {
    color: #464646;
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 800;
    text-transform: uppercase;
  }

  a.selected {
    color: #1f88ff;
  }
`;

export {
  StyledHeaderContainer,
  StyledHeaderContent
};

