import { Container } from "./styles";

interface IImageProps {
  image: string;
}

export const ImageBreed = ({ image }: IImageProps) => {
  return <Container src={image} />;
};
