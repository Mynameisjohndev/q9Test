import styled from "styled-components";

export const Container = styled.button`
  margin: 2rem;
  padding: 1.5rem;
  height: 2rem;
  background: #c64fa9;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.7);
  }
`;
