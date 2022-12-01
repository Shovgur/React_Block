import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardsListType,
  CardType,
  LikeStatus,
  SetLikeStatusPayload,
} from "../../Constants/@types";

type PostReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalIsOpened: boolean;
  selectedImage: string;
  isSelectedImageModalIsOpened: boolean;
  likedPosts: CardsListType;
  dislikedPosts: CardsListType;
  savedPosts: CardsListType;
  allPosts: CardsListType;
};

const initialState: PostReducerState = {
  selectedPost: null,
  isSelectedPostModalIsOpened: false,
  likedPosts: [],
  dislikedPosts: [],
  savedPosts: [],
  selectedImage: "",
  isSelectedImageModalIsOpened: false,
  allPosts: [],
};

//если кладете дальше объект - исходное значение null
//если кладете массив  - []
//если кладете число - 0
//boolean - false
//string - ''

const postsSlice = createSlice({
  name: "postsReducer",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
      state.isSelectedPostModalIsOpened = true;
    },
    setSelectedPostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostModalIsOpened = action.payload;
      if (!action.payload) {
        state.selectedPost = null;
      }
    },

    setSelectedImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload;
      state.isSelectedImageModalIsOpened = true;
    },
    setSelectedImageVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedImageModalIsOpened = action.payload;
      if (!action.payload) {
        state.selectedImage = "";
      }
    },

    setLikeStatus: (state, action: PayloadAction<SetLikeStatusPayload>) => {
      const { card, likeStatus } = action.payload;

      const isLike = likeStatus === LikeStatus.Like;

      const dislikedIndex = state.dislikedPosts.findIndex(
        (post) => post.id === card.id
      );
      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );

      const mainArrayKey = isLike ? "likedPosts" : "dislikedPosts";
      const secondaryArrayKey = isLike ? "dislikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : dislikedIndex;
      const secondaryIndex = isLike ? dislikedIndex : likedIndex;

      if (mainIndex === -1) {
        state[mainArrayKey].push(card);
      } else {
        state[mainArrayKey].splice(mainIndex, 1);
      }
      if (secondaryIndex > -1) {
        state[secondaryArrayKey].splice(secondaryIndex, 1);
      }
    },
    setSavedPosts: (state, action: PayloadAction<CardType>) => {
      const { ...card } = action.payload;
      const savedPostsIndex = state.savedPosts.findIndex(
        (post) => post.id === card.id
      );
      savedPostsIndex === -1
        ? state.savedPosts.push(card)
        : state.savedPosts.splice(savedPostsIndex, 1);
    },
    getPosts: (state, action: PayloadAction<undefined>) => {},
    setPosts: (state, action: PayloadAction<CardsListType>) => {
      state.allPosts = action.payload;
    },
  },
});

export const {
  setSelectedPost,
  setSelectedPostModalVisible,
  setSelectedImage,
  setSelectedImageVisible,
  setLikeStatus,
  setSavedPosts,
  getPosts,
  setPosts,
} = postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
