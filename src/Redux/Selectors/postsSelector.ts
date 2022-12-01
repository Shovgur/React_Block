import { RootState } from "../store";

export default {
  getPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostVisible: (state: RootState) =>
    state.postsReducer.isSelectedPostModalIsOpened,
  getSelectedImage: (state: RootState) => state.postsReducer.selectedImage,
  getSelectedImageVisible: (state: RootState) =>
    state.postsReducer.isSelectedImageModalIsOpened,
  getLikedPosts: (state: RootState) => state.postsReducer.likedPosts,
  getDislikedPosts: (state: RootState) => state.postsReducer.dislikedPosts,
  getSavedPosts: (state: RootState) => state.postsReducer.savedPosts,
  getAllPosts: (state: RootState) => state.postsReducer.allPosts,
};
