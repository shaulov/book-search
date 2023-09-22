import type { RootState } from "../../common/store.types";
import { NameSpace } from "../../common/const";
import type { Book } from "../../common/state.types";

export const getBooks = (state: RootState): Array<Book> => state[NameSpace.Data].books;

export const getBooksLoadingStatus = (state: RootState): boolean => state[NameSpace.Data].isBooksLoading;