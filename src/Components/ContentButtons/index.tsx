import { IBreed } from "../../pages/List";
import { Button } from "../Button";
import { Container } from "./styles";

interface IContentButtonsProps {
  handleNavigateToBreed: (breed: string) => void;
  data: IBreed[];
}

export const ContentButtons = ({
  data,
  handleNavigateToBreed,
}: IContentButtonsProps) => {
  return (
    <Container>
      {data.map((item: IBreed) => {
        return (
          <Button
            breed={item.breed}
            title={item.title}
            handleNavigateToBreed={() => handleNavigateToBreed(item.breed)}
          />
        );
      })}
    </Container>
  );
};
