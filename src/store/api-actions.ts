import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { Books } from "../common/state.types";
import type { searchParameters } from "../common/types";
import type { AppDispatch, RootState } from "../common/store.types";

export const fetchBooksBySearchAction = createAsyncThunk<Books, searchParameters | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
}>(
  'data/fetchBooksBySearch',
  async (search, { extra: api }) => {
    const { data } = await api.get<Books>('/volumes', {params: {
      q: `${search?.term}+subject:${search?.subject}`,
      maxResults: search?.maxResults,
      orderBy: search?.orderBy,
      startIndex: search?.startIndex,
      key: process.env['GOOGLE_API_KEY'],
    }});
    return data;
  }
);