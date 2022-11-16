import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./Reducer/postReducer";
import themeReducer from "./Reducer/themeReducer";

export const store = configureStore({
  reducer: { themeReducer, postsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
