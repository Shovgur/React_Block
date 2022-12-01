import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import postsReducer from "./Reducer/postReducer";
import themeReducer from "./Reducer/themeReducer";
import { rootSaga } from "./Sagas/rootsaga";
import authReducer from "./Reducer/authReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  themeReducer,
  postsReducer,
  authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
