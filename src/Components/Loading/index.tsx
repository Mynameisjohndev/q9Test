import ReactLoading from "react-loading";

import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <ReactLoading
        type="spinningBubbles"
        color="#fff"
        height={300}
        width={300}
      />
    </Container>
  );
};
