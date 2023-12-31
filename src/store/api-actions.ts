import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { Books } from "../common/state.types";
import type { searchParameters } from "../common/types";
import type { AppDispatch, RootState } from "../common/store.types";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const API_KEY: string = import.meta.env["VITE_GOOGLE_API_KEY"];

export const fetchBooksBySearchAction = createAsyncThunk<Books, searchParameters | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'data/fetchBooksBySearch',
  async (search, { extra: api }) => {
    const { data } = await api.get<Books>('/volumes', {params: {
      q: `${search?.term} subject:${search?.subject}`,
      maxResults: search?.maxResults,
      orderBy: search?.orderBy,
      startIndex: search?.startIndex,
      key: API_KEY,
    }});
    return data;
  }
);

export const fetchMoreBooksByLoadMore = createAsyncThunk<Books, searchParameters | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'data/fetchMoreBooksByLoadMore',
  async (search, { extra: api }) => {
    const { data } = await api.get<Books>('/volumes', {params: {
      q: `${search?.term} subject:${search?.subject}`,
      maxResults: search?.maxResults,
      orderBy: search?.orderBy,
      startIndex: search?.startIndex,
      key: API_KEY,
    }});
    return data;
  }
);