import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../Card";
import { CardSize } from "../../../Card/Card"; 
import PostsSelectors from "../../../../Redux/Selectors/postsSelector";
import { setSelectedPostModalVisible } from "../../../../Redux/Reducer/postReducer";

const SelectedPostModal = () => {
  const selectedPost = useSelector(PostsSelectors.getSelectedPost);
  const isVisible = useSelector(PostsSelectors.getSelectedPostModalVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedPostModalVisible(false));
  };

  return (
    selectedPost && (
      <Modal isOpen={isVisible} onRequestClose={onClose}>
        <Card size={CardSize.Large} card={selectedPost} />
      </Modal>
    )
  );
};

export default SelectedPostModal;