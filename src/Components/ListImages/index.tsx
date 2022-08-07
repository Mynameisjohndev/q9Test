import { useState } from "react";
import Modal from "react-modal";

import { IImage } from "../../pages/List";
import { ImageBreed } from "../ImageBreed";
import { Container } from "./styles";

interface IListImagesProps {
  listImages: IImage[];
}

export const ListImages = ({ listImages }: IListImagesProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<string>("");

  const handleSelectImage = (image: string) => {
    setOpenModal(true);
    setImageModal(image);
  };

  const onRequestClose = () => {
    setOpenModal(false);
    setImageModal("");
  };

  return (
    <Container>
      {listImages.map((item, index) => {
        return (
          <ImageBreed
            handleSelectImage={handleSelectImage}
            image={item.image}
            key={index}
          />
        );
      })}
      <Modal
        isOpen={openModal}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button onClick={onRequestClose} className="button-modal">
          Fechar
        </button>
        <img src={imageModal} className="img-modal" />
      </Modal>
    </Container>
  );
};
