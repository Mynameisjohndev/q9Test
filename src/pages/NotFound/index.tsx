import { Link } from "react-router-dom";

import { Container } from "./styles";

export const NotFound = () => {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <Link to="/list">Voltar</Link>
    </Container>
  );
};
