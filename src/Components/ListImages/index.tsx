import { IImage } from "../../pages/List";
import { ImageBreed } from "../ImageBreed";
import { Container } from "./styles";

interface IListImagesProps {
  listImages: IImage[];
}

export const ListImages = ({ listImages }: IListImagesProps) => {
  return (
    <Container>
      {listImages.map((item, index) => {
        return <ImageBreed image={item.image} key={index} />;
      })}
    </Container>
  );
};
