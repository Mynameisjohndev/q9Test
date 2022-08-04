import { Container } from "./styles";

interface IButtonProps {
  breed: string;
  title: string;
  handleNavigateToBreed: (breed: string) => void;
}
export const Button = ({
  breed,
  title,
  handleNavigateToBreed,
}: IButtonProps) => {
  return (
    <Container onClick={() => handleNavigateToBreed(breed)}>{title}</Container>
  );
};
