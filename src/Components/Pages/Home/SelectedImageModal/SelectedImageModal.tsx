import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../../../Redux/Selectors/postsSelector";
import Modal from "../../../../Components/Modal";

import styles from "./SelectedImageModal.module.css";
import { setSelectedImageVisible } from "../../../../Redux/Reducer/postReducer";

const SelectedImageModal = () => {
  const selectedImage = useSelector(postsSelectors.getSelectedImage);

  const isVisible = useSelector(postsSelectors.getSelectedImageVisible);

  const dispatch = useDispatch();
  const onClosed = () => {
    dispatch(setSelectedImageVisible(false));
  };

  return (
    <Modal isOpen={isVisible} onRequestClose={onClosed}>
      <img src={selectedImage} alt={""} className={styles.image} />
    </Modal>
  );
};
export default SelectedImageModal;