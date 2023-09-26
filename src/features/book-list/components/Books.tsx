import type { FunctionComponent } from "../../../common/types";
import { BookList } from "./BookList";
import { useAppSelector } from "../../../hooks/use-app-selector";
import { useAppDispatch } from "../../../hooks/use-app-dispatch";
import { getBooks, getBooksLoadingStatus, getTotalBooks, getMoreBooksLoadingStatus } from "../../../store/books-slice/selectors";
import { getSearch } from "../../../store/search-slice/selectors";
import { incrementStartIndex } from "../../../store/search-slice";
import { fetchMoreBooksByLoadMore } from "../../../store/api-actions";
import { Loader } from "../../../components/ui/Loader";


function Books(): FunctionComponent {
  const books = useAppSelector(getBooks);
  const isLoading = useAppSelector(getBooksLoadingStatus);
  const isLoadingMore = useAppSelector(getMoreBooksLoadingStatus);
  const total = useAppSelector(getTotalBooks);
  const searchParameters = useAppSelector(getSearch);

  const dispatch = useAppDispatch();

  const handleLoadMoreClick = (): void => {
    dispatch(incrementStartIndex());
    void dispatch(fetchMoreBooksByLoadMore({
      ...searchParameters, 
      startIndex: String(Number(searchParameters.startIndex) + 30),
    }));
  }

  return (
    <section className="max-w-[1200px] m-auto px-10 py-4">
      <p className="pb-4 text-center">Found {total} results</p>
      {isLoading && <Loader />}
      <BookList data={books} />
      {
        (books.length > 0) && (total - books.length > 0) && 
        <button 
          className="block mt-4 mx-auto px-4 py-2 text-white bg-gradient-to-r from-sky-900 to-indigo-900 rounded"
          onClick={handleLoadMoreClick}
          disabled={isLoadingMore}
        >
          Load more
        </button>
      }
    </section>
  );
}

export { Books };