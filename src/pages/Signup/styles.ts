import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  input,
  button {
    width: 20rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: 0;
  }
  button {
    transition: 0.3s all;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;
