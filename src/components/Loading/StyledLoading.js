import styled from "styled-components";

const StyledLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  padding-top: ${props => props.isBottom ? '0px' : '150px'};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 8px;
    border: 5px solid #1f88ff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1f88ff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
  }
`;

export { StyledLoading };
