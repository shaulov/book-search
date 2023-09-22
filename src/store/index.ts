import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./books-slice";
import { createApi } from "../common/services/api";
import { NameSpace } from "../common/const";

const api = createApi();

export const store = configureStore({
  reducer: {
    [NameSpace.Data]: booksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});