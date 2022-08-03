import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../Services/api";

interface IImage {
  image: string;
}

export const List = () => {
  const navigate = useNavigate();
  const [listImages, setListImages] = useState<IImage[]>([]);
  const { breed } = useParams();

  const handleNavigateToBreed = (breed: string) => {
    navigate(`/list/${breed}`);
  };

  const loadBreedImages = useCallback(async () => {
    const { data } = await api.get(`/list?breed=${breed}`);
    const images: IImage[] = [];
    data.list.forEach((breedImage: string) => {
      images.push({ image: breedImage });
    });
    setListImages(images);
  }, [breed]);

  useEffect(() => {
    if (breed) {
      loadBreedImages();
    }
  }, [breed]);

  return (
    <div>
      <h1>List</h1>
      <button
        onClick={() => {
          handleNavigateToBreed("husky");
        }}
      >
        Husky
      </button>
      <button
        onClick={() => {
          handleNavigateToBreed("chihuahua");
        }}
      >
        Chihuahua
      </button>
      <button
        onClick={() => {
          handleNavigateToBreed("pug");
        }}
      >
        Pug
      </button>
      <button
        onClick={() => {
          handleNavigateToBreed("labrador");
        }}
      >
        Labrador
      </button>
      {listImages.map((item, index) => {
        return <h1 key={index}>{item.image}</h1>;
      })}
    </div>
  );
};
