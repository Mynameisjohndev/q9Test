import { Container } from "./styles";

interface IImageProps {
  image: string;
  handleSelectImage: (image: string) => void;
}

export const ImageBreed = ({ image, handleSelectImage }: IImageProps) => {
  return <Container onClick={() => handleSelectImage(image)} src={image} />;
};
