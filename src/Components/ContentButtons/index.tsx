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
      {data.map((item: IBreed, index) => {
        return (
          <Button
            key={index}
            breed={item.breed}
            title={item.title}
            handleNavigateToBreed={() => handleNavigateToBreed(item.breed)}
          />
        );
      })}
    </Container>
  );
};
