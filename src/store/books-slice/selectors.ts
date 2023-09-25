import type { RootState } from "../../common/store.types";
import { NameSpace } from "../../common/const";
import type { TransformedBookData } from "../../common/state.types";

export const getBooks = (state: RootState): Array<TransformedBookData> => state[NameSpace.Data].books;

export const getBooksLoadingStatus = (state: RootState): boolean => state[NameSpace.Data].isBooksLoading;

export const getTotalBooks = (state: RootState): number => state[NameSpace.Data].totalBooks;