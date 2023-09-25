import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksBySearchAction } from "../api-actions";
import type { BooksData } from "../../common/state.types";
import { NameSpace } from "../../common/const";
import { transformBooksData } from "../../common/transform-books-data";

const initialState: BooksData = {
  books: [],
  totalBooks: 0,
  isBooksLoading: false,
};

export const booksSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooksBySearchAction.pending, (state) => {
        state.isBooksLoading = true;
      })
      .addCase(fetchBooksBySearchAction.fulfilled, (state, action) => {
        state.books = action.payload.items ? transformBooksData(action.payload.items) : [];
        state.totalBooks = action.payload.totalItems;
        state.isBooksLoading = false;
      })
      .addCase(fetchBooksBySearchAction.rejected, (state) => {
        state.isBooksLoading = false;
      });
  }
});