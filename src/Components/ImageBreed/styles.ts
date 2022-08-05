import styled from "styled-components";

export const Container = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
  transition: 0.3s all;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0px 5px 18px -3px #000000;
    box-shadow: 0px 5px 18px -3px #000000;
  }
`;
