import { combineReducers } from "@reduxjs/toolkit";
import { booksSlice } from "./books-slice";
import { searchSlice } from "./search-slice";
import { NameSpace } from "../common/const";

export const rootReducer = combineReducers({
  [NameSpace.Data]: booksSlice.reducer,
  [NameSpace.Search]: searchSlice.reducer,
});