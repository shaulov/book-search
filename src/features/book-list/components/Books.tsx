import type { FunctionComponent } from "../../../common/types";
import { BookList } from "./BookList";

import { useAppSelector } from "../../../hooks/use-app-selector";
import { getBooks, getBooksLoadingStatus, getTotalBooks } from "../../../store/books-slice/selectors";

function Books(): FunctionComponent {
  const books = useAppSelector(getBooks);
  const isLoading = useAppSelector(getBooksLoadingStatus);
  const total = useAppSelector(getTotalBooks);

  return (
    <section className="max-w-[1200px] m-auto px-10 py-4">
      {
        isLoading 
          ? <p>Loading...</p> :
          <>
            <p className="pb-4 text-center">Found {total} results</p>
            <BookList data={books} />
          </>
      }
    </section>
  );
}

export { Books };