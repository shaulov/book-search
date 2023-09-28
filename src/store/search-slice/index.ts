import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { searchParameters } from "../../common/types";
import { NameSpace, MaxResult, SortingOptions, FilterOptions } from "../../common/const";

const initialState: searchParameters = {
  term: '',
  subject: FilterOptions[0]?.value,
  maxResults: String(MaxResult),
  orderBy: SortingOptions[0]?.value,
  startIndex: '0',
}

export const searchSlice = createSlice({
  name: NameSpace.Search,
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<searchParameters>) {
      state.term = action.payload?.term || state.term;
      state.subject = action.payload?.subject || state.subject;
      state.orderBy = action.payload?.orderBy || state.orderBy;
      state.startIndex = action.payload?.startIndex || state.startIndex;
    },
    incrementStartIndex(state) {
      state.startIndex = String(Number(state.startIndex) + MaxResult);
    }
  }
});

export const { setSearch, incrementStartIndex } = searchSlice.actions;