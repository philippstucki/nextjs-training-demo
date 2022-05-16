import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./itemsSlice";

export const itemsStore = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof itemsStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof itemsStore.dispatch;
