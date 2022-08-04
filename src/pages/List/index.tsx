import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContentButtons } from "../../Components/ContentButtons";
import { ListImages } from "../../Components/ListImages";
import { Loading } from "../../Components/Loading";
import { api } from "../../Services/api";
import { Container } from "./styles";

export interface IImage {
  image: string;
}
export interface IBreed {
  title: string;
  breed: string;
}

const allBreeds: IBreed[] = [
  { breed: "husky", title: "husky" },
  { breed: "chihuahua", title: "Chihuahua" },
  { breed: "pug", title: "Pug" },
  { breed: "labrador", title: "Labrador" },
];

export const List = () => {
  const navigate = useNavigate();
  const [listImages, setListImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { breed } = useParams();

  const handleNavigateToBreed = (breed: string) => {
    navigate(`/list/${breed}`);
  };

  const loadBreedImages = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(`/list?breed=${breed}`);
    const images: IImage[] = [];
    data.list.forEach((breedImage: string) => {
      images.push({ image: breedImage });
    });
    setLoading(false);
    setListImages(images);
  }, [breed]);

  useEffect(() => {
    if (breed) {
      loadBreedImages();
    }
  }, [breed]);

  return (
    <Container>
      <header>
        <ContentButtons
          data={allBreeds}
          handleNavigateToBreed={handleNavigateToBreed}
        />
      </header>
      {loading === true ? <Loading /> : <ListImages listImages={listImages} />}
    </Container>
  );
};
